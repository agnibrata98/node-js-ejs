class AppController {
    async home(req, res) {
        // res.send('Hello World!');
        try {
            res.render('home',{
                title: 'Home',
            }); 
        } catch (error) {
            throw error;
        }
    }

    async about(req, res) {
        // res.send('Hello World!');
        try {
            res.render('about',{
                title: 'About',
            }); 
        } catch (error) {
            throw error;
        }
    }


    async service(req, res) {
        // res.send('Hello World!');
        try {
            res.render('service',{
                title: 'Service',
            }); 
        } catch (error) {
            throw error;
        }
    }

    async contact(req, res) {
        // res.send('Hello World!');
        try {
            res.render('contact',{
                title: 'Contact',
            }); 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new AppController();