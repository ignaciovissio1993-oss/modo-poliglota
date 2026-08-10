export const whatsappUrl = "https://wa.me/5492954554314";

export const site = {
  name: "Modo Políglota",
  url: "https://modopoliglota.example",
  description:
    "Aprendé vietnamita o inglés conversacional online con profesores experimentados. Clases personalizadas, conversaciones reales y horarios flexibles.",
  email: "hola@ignacioydiep.com",
  phone: "+54 9 2954 55-4314",
};

export const teachers = [
  {
    name: "Ignacio",
    title: "Profesor de inglés conversacional online",
    language: "Inglés",
    experience: "Más de 6 años",
    languages: ["Español", "English"],
    credentials: ["Formación docente en inglés", "Especialización en conversación", "Clases online personalizadas"],
    philosophy:
      "La confianza aparece cuando hablás desde el primer día con materiales preparados, correcciones naturales y un documento compartido para revisar cada avance.",
    bio:
      "Especialista en inglés conversacional con amplia experiencia ayudando a estudiantes a hablar con naturalidad. Sus clases se enfocan en fluidez, escucha, confianza y expresión de ideas en conversaciones reales.",
    specialties: ["Inglés conversacional", "Speaking natural", "Fluidez", "Listening"],
    accent: "from-sky-200 via-white to-emerald-100",
    videoTitle: "Presentación de Ignacio",
    youtubeId: "2uf-nVVIqy4",
    schedule: "Horarios flexibles online",
  },
  {
    name: "Diep",
    title: "Profesora nativa de vietnamita",
    language: "Vietnamita",
    experience: "Más de 8 años",
    languages: ["Vietnamita", "English", "Español"],
    credentials: ["Enseñanza de vietnamita para extranjeros", "Comprensible Input", "Clases comunicativas online"],
    philosophy:
      "Aprendés mejor cuando entendés mensajes reales, escuchás mucho vietnamita natural y practicás a tu ritmo.",
    bio:
      "Hablante nativa de vietnamita con años de experiencia enseñando el idioma mediante conversaciones naturales y comprensible input. Sus clases son relajadas, prácticas y personalizadas.",
    specialties: ["Vietnamita para principiantes", "Conversación", "Pronunciación", "Comprensible Input"],
    accent: "from-emerald-200 via-sky-100 to-orange-100",
    videoTitle: "Presentación de Diep",
    youtubeId: "KpHtr3j0QIk",
    schedule: "Horarios flexibles online",
  },
];

export type TestimonialLanguage = "vietnamese" | "english";

export type StudentTestimonial = {
  language: TestimonialLanguage;
  name: string;
  rating: number;
  date: string;
  quote: string;
  source: "Preply";
  sourceUrl: string;
};

export const testimonials: StudentTestimonial[] = [
  {
    language: "english",
    name: "Dwayne",
    rating: 5,
    date: "Jan 29, 2025",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "It was an absolute pleasure to learn English with Ignacio. Over a series of lessons, he helped me to improve both my listening comprehension and my speaking skills. He adjusted his speaking speed and level to my level of comprehension. He is very easy and pleasant to talk to. He focuses primarily on helping his students communicate, rather than on the intricacies of grammar. This helped me to quickly become more comfortable holding a conversation in English. Highly recommended!",
  },
  {
    language: "english",
    name: "Pawel",
    rating: 5,
    date: "Jan 20, 2025",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "Ignacio has taught me English since 2024 in a truly enjoyable, natural, and effective way. He is patient, attentive, and always adapts the lessons to my needs. I really appreciate the relaxed atmosphere and the focus on real conversation.",
  },
  {
    language: "english",
    name: "Saurabh",
    rating: 5,
    date: "Sep 13, 2024",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "It is a pleasure to take English lessons with Ignacio. He is very patient, easy to talk to, and helps me practice conversation naturally.",
  },
  {
    language: "english",
    name: "Bernardo",
    rating: 5,
    date: "Aug 13, 2024",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "Excellent tutor. Very patient, clear, and attentive. He makes English lessons interesting and useful.",
  },
  {
    language: "english",
    name: "Krishna",
    rating: 5,
    date: "May 21, 2024",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "Ignacio is a great tutor. He is patient and makes lessons enjoyable while keeping them focused on communication.",
  },
  {
    language: "vietnamese",
    name: "Cameron",
    rating: 5,
    date: "Jun 17, 2025",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "I think Diep is great at teaching and working through the problems that I face. It is obvious that she has a lot of experience, and she is patient with me.",
  },
  {
    language: "vietnamese",
    name: "Joe",
    rating: 5,
    date: "Mar 27, 2025",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "I've been learning with Diep for 1 month now. She is very helpful and gives me lots of opportunity to speak. Every class is fun and well structured. I can feel my Vietnamese improving already.",
  },
  {
    language: "vietnamese",
    name: "Andrew",
    rating: 5,
    date: "Feb 28, 2025",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "Diep is great. I am starting from scratch and she is patient and knowledgeable.",
  },
];

export const pricingPlans = [
  {
    name: "Clase de Inglés",
    subtitle: "Clase individual online",
    price: "AR$ 20.000",
    cadence: "por clase",
    features: [
      "Duración: 50 minutos",
      "Clases individuales online",
      "Materiales incluidos",
      "Documento compartido con notas de cada clase",
      "Cancelación o reprogramación con al menos 24 horas de anticipación",
    ],
    cta: "Reservá una clase",
  },
  {
    name: "Clase de Vietnamita",
    subtitle: "Clase individual online",
    price: "AR$ 32.000",
    cadence: "por clase",
    features: [
      "Duración: 50 minutos",
      "Clases individuales online",
      "Materiales incluidos",
      "Documento compartido con notas de cada clase",
      "Cancelación o reprogramación con al menos 24 horas de anticipación",
    ],
    cta: "Reservá una clase",
  },
];
