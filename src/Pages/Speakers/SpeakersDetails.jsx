
import { useRef, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  Languages,
  Share2,
  MapPin,
  UserX,
  Mail,
  Phone,
  Award,
  Users,
  Clock,
} from "lucide-react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import speakerData from "../../Data/Speakers.json";
import { getSocialIcon } from "../../Components/SpeakersCard/SpeakersCard";

// Registrar plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Constantes
const sectionbanner = "/Images/section-banner.jpg";
const SpeakerIconDefault = "/Images/Index/Speakers/speaker-icon.svg";
const DEFAULT_EMAIL = "contact@event.com";
const DEFAULT_PHONE = "+1 234 567 890";

// Componente para enlaces sociales 
const SocialLinks = ({ name, socials }) => {
  const linksRef = useRef([]);

  useEffect(() => {
    if (linksRef.current.length) {
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: linksRef.current[0].closest(".social-section"),
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  if (!socials?.length) return null;

  return (
    <div className="social-section bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-xl">
      <h5 className="text-prim-dark font-bold text-lg mb-6 flex items-center gap-2">
        <Share2 className="text-prim" size={20} />
        Connect with {name.split(" ")[0]}
      </h5>
      <div className="flex gap-4">
        {socials.map((social, idx) => (
          <a
            key={idx}
            ref={(el) => (linksRef.current[idx] = el)}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-prim-dark hover:bg-prim hover:text-white transition-all duration-300"
            aria-label={`${social.name} profile`}
          >
            {getSocialIcon(social.name)}
          </a>
        ))}
      </div>
    </div>
  );
};

// Tarjeta de estadística con animación de conteo (GSAP)
const StatCard = ({ label, value }) => {
  const cardRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    const numEl = numberRef.current;
    if (!el || !numEl) return;

    let animation;
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        animation = gsap.to(numEl, {
          innerText: value,
          duration: 1.5,
          snap: { innerText: 1 },
          ease: "power2.out",
          onUpdate: function () {
            numEl.innerText = Math.floor(this.targets()[0].innerText);
          },
        });
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1)" }
        );
      },
    });

    return () => {
      if (animation) animation.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [value]);

  return (
    <div
      ref={cardRef}
      className="p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
    >
      <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-bold mb-3 group-hover:text-prim transition-colors">
        {label}
      </p>

      <p
        ref={numberRef}
        className="text-4xl lg:text-5xl font-bold font-unbounded text-prim-dark leading-none"
      >
        0
      </p>
    </div>
  );
};

// Barra de habilidad con animación GSAP
const SkillBar = ({ name, percent }) => {
  const barRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    const wrapper = wrapperRef.current;
    if (!bar || !wrapper) return;

    ScrollTrigger.create({
      trigger: wrapper,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          bar,
          { width: "0%" },
          { width: `${percent}%`, duration: 1.2, ease: "power2.out" }
        );
        gsap.fromTo(
          wrapper.querySelector(".skill-percent"),
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6, delay: 0.5 }
        );
      },
    });
  }, [percent]);

  return (
    <div ref={wrapperRef} className="relative">
      <div className="flex justify-between items-center mb-2.5">
        <span className="font-bold text-prim-dark text-lg uppercase tracking-wide">
          {name}
        </span>
        <span className="skill-percent text-prim font-bold opacity-0">
          {percent}%
        </span>
      </div>
      <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-prim to-prim-light rounded-full"
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

// Tarjeta de información con hover GSAP
const InfoCard = ({ icon: Icon, label, value, href, isLink = false }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const hoverIn = () => {
      gsap.to(card, { y: -5, duration: 0.3, ease: "power2.out" });
    };
    const hoverOut = () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
    };

    card.addEventListener("mouseenter", hoverIn);
    card.addEventListener("mouseleave", hoverOut);

    return () => {
      card.removeEventListener("mouseenter", hoverIn);
      card.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  const content = (
    <>
      <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-prim/10 to-prim/5 rounded-xl flex items-center justify-center shadow-inner">
        <Icon className="w-7 h-7 text-prim" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          {label}
        </p>
        {isLink ? (
          <a
            href={href}
            className="text-prim-dark font-bold hover:text-prim transition-colors truncate block"
            title={value}
          >
            {value}
          </a>
        ) : (
          <p className="text-prim-dark font-bold truncate" title={value}>
            {value}
          </p>
        )}
      </div>
    </>
  );

  return (
    <div
      ref={cardRef}
      className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-200 shadow-md transition-all duration-300 overflow-hidden"
    >
      {content}
    </div>
  );
};

// CTA con animación GSAP y efecto parallax
const ContactCTA = () => {
  const ctaRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
          },
        }
      );

      // Parallax sutil en el círculo de fondo
      gsap.to(".cta-bg-blur", {
        x: 20,
        y: 20,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ctaRef}
      className="bg-gradient-to-br from-prim-dark to-prim-dark/90 p-12 rounded-[3rem] text-white relative overflow-hidden group shadow-2xl"
    >
      <div className="cta-bg-blur absolute -top-24 -right-24 w-64 h-64 bg-prim/30 rounded-full blur-[100px]" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          ref={iconRef}
          className="w-20 h-20 bg-white/20 backdrop-blur-md p-5 rounded-3xl mb-8 transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
        >
          <img
            src={SpeakerIconDefault}
            alt="Collaboration icon"
            className="w-full h-full invert"
            loading="lazy"
          />
        </div>
        <h3 className="text-3xl lg:text-4xl font-bold font-unbounded mb-6 leading-tight">
          Let's Create <span className="text-prim">Something Amazing</span>
        </h3>
        <p className="text-gray-300 text-lg mb-10 max-w-sm">
          Bring this expert to your stage and inspire your audience.
        </p>
        <Link
          to="/contact"
          className="w-full sm:w-auto px-10 py-5 bg-prim hover:bg-white hover:text-prim-dark text-white font-bold rounded-xl transition-all duration-400 text-lg uppercase tracking-wider text-center shadow-lg hover:shadow-xl"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

// Componente principal
const SpeakersDetails = () => {
  const { id } = useParams();
  const speaker = useMemo(
    () => speakerData.find((s) => s.id === id),
    [id]
  );

  // Refs para animaciones principales
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const infoRef = useRef(null);
  const skillsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!speaker) return;

    const ctx = gsap.context(() => {
      // Animación de entrada del héroe
      const tl = gsap.timeline();
      tl.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      // Animación de la imagen con efecto parallax suave
      gsap.to(imageRef.current, {
        y: 30,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ScrollTrigger para la sección de información
      ScrollTrigger.create({
        trigger: infoRef.current,
        start: "top 70%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            infoRef.current.querySelectorAll(".animate-item"),
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, stagger: 0.2, duration: 0.6 }
          );
        },
      });

      // Animación de habilidades
      ScrollTrigger.create({
        trigger: skillsRef.current,
        start: "top 70%",
        once: true,
        onEnter: () => {
          gsap.fromTo(
            skillsRef.current.querySelectorAll(".skill-category"),
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, stagger: 0.15, duration: 0.5 }
          );
        },
      });
    });

    return () => ctx.revert();
  }, [speaker]);

  if (!speaker) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="text-center">
          <UserX className="text-gray-300 w-24 h-24 mx-auto mb-6" />

          <h1 className="text-3xl font-bold text-prim-dark mb-4">
            Speaker not found
          </h1>

          <Link to="/speakers" className="text-prim hover:underline font-medium">
            Back to All Speakers
          </Link>
        </div>
      </div>
    );
  }

  const expertise = speaker.expertise ?? [];
  const skills = speaker.skills ?? [];
  const stats = speaker.stats ?? [];
  const socials = speaker.socials ?? [];

  return (
    <div className="bg-white overflow-x-hidden">
      <PageHeader
        title="Speaker Profile"
        bgImage={sectionbanner}
        breadcrumbTitle={speaker.name}
      />

      <div className="px-[5%] lg:px-[10%] py-[8%] md:py-[10%]">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section con GSAP */}
          <div ref={heroRef} className="flex flex-col xl:flex-row gap-16 items-start mb-24">
            {/* Imagen con efecto parallax */}
            <div className="w-full xl:w-1/3 group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
                <img
                  ref={imageRef}
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full aspect-4/5 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-prim-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white text-sm font-bold tracking-widest uppercase">
                    ✨ {expertise[0] || "Visionary"} Expert
                  </p>
                </div>
              </div>
              <SocialLinks name={speaker.name} socials={socials} />
            </div>

            {/* Información personal */}
            <div ref={infoRef} className="w-full xl:w-2/3">
              <div className="mb-10">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="px-4 py-1 bg-gradient-to-r from-prim/20 to-prim/5 text-prim rounded-full text-xs font-bold tracking-widest uppercase animate-item">
                    Featured Speaker
                  </span>

                  <span className="flex items-center gap-1.5 text-gray-400 text-sm font-medium animate-item">
                    <MapPin className="text-prim" size={18} />
                    {speaker.location || "Global Presence"}
                  </span>
                </div>

                <h2 className="text-5xl lg:text-7xl font-bold font-unbounded text-prim-dark mb-6 leading-tight animate-item">
                  {speaker.name}
                </h2>

                <div className="flex items-center gap-4 mb-8 animate-item">
                  <div className="h-0.5 w-12 bg-prim rounded-full" />
                  <p className="text-prim text-2xl lg:text-3xl font-medium">
                    {speaker.role} <span className="text-gray-300 mx-2">|</span>{" "}
                    {speaker.company}
                  </p>
                </div>

                <div className="space-y-6 text-gray-500 text-xl leading-relaxed">
                  <p className="font-semibold text-prim-dark italic animate-item">
                    “{speaker.description}”
                  </p>

                  <p className="animate-item">
                    {speaker.bio ||
                      "A visionary leader transforming ideas into reality. With a career spanning over a decade, this speaker delivers actionable insights and inspires change."}
                  </p>
                </div>
              </div>

              {/* Estadísticas */}
              {stats.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                  {stats.map((stat, idx) => (
                    <StatCard key={idx} label={stat.label} value={stat.value} />
                  ))}
                </div>
              )}

              {/* Etiquetas de expertise */}
              {expertise.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {expertise.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-6 py-2.5 bg-gray-100 text-prim-dark border border-gray-200 rounded-full text-sm font-bold hover:bg-prim hover:text-white hover:border-prim transition-all cursor-default"
                    >
                      # {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full mb-20" />

          {/* Sección de habilidades y CTA */}
          <div className="flex flex-col lg:flex-row gap-20">
            <div ref={skillsRef} className="w-full lg:w-1/2">
              <div className="mb-10">
                <h4 className="text-3xl font-bold font-unbounded text-prim-dark mb-4 skill-category">
                  Core Competencies
                </h4>

                <p className="text-gray-500 text-lg skill-category">
                  Technical depth and strategic mastery.
                </p>
              </div>

              <div className="space-y-8">
                {skills.map((skill, idx) => (
                  <div key={idx} className="skill-category">
                    <SkillBar name={skill.name} percent={skill.percent} />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <ContactCTA />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <InfoCard
                  icon={Calendar}
                  label="Availability"
                  value="Limited spots"
                />
                <InfoCard
                  icon={Languages}
                  label="Languages"
                  value="English, Spanish"
                />
                <InfoCard
                  icon={Mail}
                  label="Email"
                  value={speaker.email || DEFAULT_EMAIL}
                  href={`mailto:${speaker.email || DEFAULT_EMAIL}`}
                  isLink
                />
                <InfoCard
                  icon={Phone}
                  label="Phone"
                  value={speaker.phone || DEFAULT_PHONE}
                  href={`tel:${speaker.phone || DEFAULT_PHONE}`}
                  isLink
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersDetails;
