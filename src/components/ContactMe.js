import FadeUpAnim from "./FadeUpAnim";
import Footer from "./Footer";

function ContactMe() {
    return (
        <FadeUpAnim>
            <section>
                <div className="aboutme-container">
                    <div className="send-msg-block">
                        <h2>Send a Message</h2>
                        <form>
                            <input type="text" name="tb1" placeholder="Your Name" />
                            <br />
                            <input type="email" name="tb2" placeholder="Your Email" />
                            <br />
                            <textarea name="tb3" placeholder="Your Message..."></textarea>
                            <br />
                            <input type="submit" name="submit" value="Send Message ✉️" />
                        </form>
                    </div>
                    <div className="getintouch-block">
                        <h2>Get in Touch</h2>
                        <p>I am always open to connecting with students, colleagues, and collaborators. Whether you have questions, ideas for academic collaboration, or simply wish to engage in a thoughtful conversation, feel free to reach out at any time. Let’s connect and make a positive impact together.</p>
                        <div className="email-block">
                            <a href="mailto:hods@dypimca.ac.in?subject=Inquiry%20from%20Portfolio&body=Hello%20Madam%2C%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20academic%20opportunities%20and%20further%20information.%0D%0A%0D%0APlease%20let%20me%20know%20how%20I%20can%20proceed.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D%0D%0A%5BYour%20Contact%20Details%5D">  
                                <i className="fas fa-envelope"></i>
                                <span>hods@dypimca.ac.in</span>
                            </a>

                        </div>
                        <h2 id="connect-me-heading">Connect with Me</h2>
                        <div className="connect-me">
                            <a href="https://facebook.com/yourprofile" target="_blank">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/dr-kavita-suryawanshi-43b65532b/" target="_blank">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://wa.me/9423487613?text=Hello%20Ma%E2%80%99am%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20for%20further%20discussion.%20Thank%20you!" target="_blank">
    <i className="fab fa-whatsapp"></i>
</a>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </FadeUpAnim>
    );
}

export default ContactMe;