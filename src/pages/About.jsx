
import vlogo from "../assets/brand/vlogo.png";
export default function AboutUs() {
  return (
    <div className="bg-black text-white text-center py-20">
      <h2 className="text-4xl font-bold mb-4">CREATIVE PORTFOLIO</h2>
      <div className="flex justify-center mb-4">
        <img src={vlogo} />
      </div>
      <p className="max-w-2xl mx-auto">
        Create. Communicate. Connect. At Vackaduo, we're dedicated to amplifying
        your brand's voice and igniting meaningful connections. Through our
        strategic mastery in planning, digital outreach, and media relations, we
        equip businesses to flourish in an ever-evolving market. Count on us to
        champion your success with unwavering creativity, dedication, and
        strategic insight. Together, let's turn your vision into achievements.
      </p>
    </div>
  );
}
