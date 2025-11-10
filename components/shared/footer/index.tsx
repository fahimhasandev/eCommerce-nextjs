import { APP_NAME } from "@/lib/constant";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100">
      <div className="p-5 flex-center">
        {currentYear} {APP_NAME}. All Right Reservered.
      </div>
    </footer>
  );
};

export default Footer;
