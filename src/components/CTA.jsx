import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        This is the beginning of something <br className='sm:block hidden' />
        <span className='blue-gradient_text font-semibold drop-shadow'>
          wonderful
        </span>
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
