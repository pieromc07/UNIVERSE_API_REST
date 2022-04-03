import {sgMail} from '@sendgrid/mail';

export const sendMail = (req, res) => {

    const { correo, nombres, apellidos } = req.body;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: correo,
        from: 'tg.elias.s@gmail.com',
        subject: `Estado de Solicitud - Cliente (${nombres} ${apellidos})`,
        text: 'Su solicitud ha sido enviada, su estado actual es PENDIENTE.',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            res.status(200).json({message: 'Email sent'});
        })
        .catch((error) => {
            console.error(error)
            res.status(500).json( { message : 'Error sending email', res : error });
        });
}


export const servipacMail = (req, res) => {

    const { name, email, message} = req.body;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        from: email,
        to: 'tg.elias.s@gmail.com',
        subject: `Servipac - ${name}`,
        text: message,
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            res.status(200).json({message: 'Email sent'});
        })
        .catch((error) => {
            console.error(error)
            res.status(500).json( { message : 'Error sending email', res : error });
        });
}

