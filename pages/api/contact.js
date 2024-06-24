export default async function handler(req, res) {
    if(req.method !== 'POST')
        return res.status(405).json({
        success: false, 
        data: "Please make a POST request" 
    });

    const contactData = JSON.parse(req.body);

    const {error} = await supabase.from('contact').insert([contactData])

    if(error)
        res.status(500).json({
            success: false, 
            data: "Could not send your message. Please try again" });

    
    // Success message
    res.status(200).json({
        success: true, 
        data: "thanks for message! We will be in touch soon :)" });
}