import AnimatedSection from '../components/ui/AnimatedSection';
import { Mail, LinkedinIcon } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-24">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          {/* Made the card narrower and centered */}
          <div className="mt-16 max-w-md mx-auto bg-white p-8 border rounded-2xl shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-gray-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <a href="mailto:contact.aradhyaverma@gmail.com" className="text-purple-600 hover:underline break-all">
                    contact.aradhyaverma@gmail.com
                  </a>
                </div>
              </div>
              {/* ADDED LINKEDIN SECTION */}
              <div className="flex items-center gap-4">
                <LinkedinIcon className="h-6 w-6 text-gray-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Connect on LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/verma-aradhya" className="text-purple-600 hover:underline">
                    linkedin.com/in/verma-aradhya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;