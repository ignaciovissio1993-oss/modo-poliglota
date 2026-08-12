export const whatsappUrl = "https://wa.me/5492954554314";

export const site = {
  name: "Modo Políglota",
  url: "https://modopoliglota.lazyvietnamese.com",
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
    name: "SOPHIE",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "Me encanta las classes con Ignacio! We do half conversations half grammar and reading exercises which is perfect for my level. I really like that he adapts the lessons to areas that clearly need improvements. He prepares well all sessions and is always on time. Communication is very fluid, and Ignacio is very responsive and flexible too. It's been a few months that I am taking classes with him and I have improved so much! I highly recommend him as a tutor!",
  },
  {
    language: "english",
    name: "Jade",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "Ignacio is a great guy and an awesome teacher! Hes really patient, hes always well prepared with plenty of resources, he makes the sessions fun and specific for what you want to learn. Definitely the best lessons Ive had, I look forward to the sessions each week :)",
  },
  {
    language: "english",
    name: "Tuyet",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "Ignacio is a very kind and patient teacher. He helps me a lot with grammar, pronunciation, and speaking. His explanations are clear and easy to understand. I really enjoy our lessons, he's always supportive and creates a comfortable learning environment.",
  },
  {
    language: "english",
    name: "Diep",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "I am in intermediate learner and I am working on my grammar and speaking and I think I found my tutor! Highly recommended!!",
  },
  {
    language: "english",
    name: "Heba",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "Ignacio is great! The lessons are fun and interactive! I tried several tutors before him and he's the only one that has made me feel encouraged to continue learning! He's very smart and can always think of ways to help me remember and use new words! I feel a lot more confident in English now even though when I started I was a total beginner. Ignacio es un excelente profesor!",
  },
  {
    language: "english",
    name: "Sal",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "Ignacio is a fantastic teacher! He goes out of his way to make sure you understand. He gives me corrections that ***no other tutor*** has ever given me. My English has become a lot more polished and I now make less mistakes thanks to him. I appreciate him loads!! If you're looking for a tutor that goes above and beyond, look no further than Ignacio!",
  },
  {
    language: "english",
    name: "Cristian",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote: "Excelente docente, didáctico, motivador y enseña con pasión.",
  },
  {
    language: "english",
    name: "Mung",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote: "He is an excellent teacher who helps me to improve English. Don't hesitate to choose him as your teacher",
  },
  {
    language: "english",
    name: "Matias",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote: "Excelente profesor, sus clases son entretenidas, es muy responsable, paciente y amable, 100% recomendado.",
  },
  {
    language: "english",
    name: "Julian",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "Lo conocí por la página! Muy claro con los conceptos y es super práctico a la hora de relacionar los temas! Me encanta porque no nos centramos solo en gramatica sino tambien en el speaking que me parece esencial para comunicarse. Es super agradable y paciente! 11/10!",
  },
  {
    language: "english",
    name: "Diệp",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/3144033",
    quote:
      "Ignacio is an amazing teacher! He is super patient and his classes are always fun! I love our conversations and he makes you feel always comfortable with making mistakes.",
  },
  {
    language: "vietnamese",
    name: "David",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote: "Great tutor! Patient and understanding.",
  },
  {
    language: "vietnamese",
    name: "Sophia",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "Diệp is a great teacher in many ways. I have had her as a teacher for about 9 months and she has helped me tremendously with preparing for my move to Vietnam. Her lessons were always easy to understand and she adjusts well to your learning goals. She is also very friendly and the lessons were always very fun and enjoyable! :-)",
  },
  {
    language: "vietnamese",
    name: "Sammy",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "I've had a few Vietnamese teachers in person and online and Diệp is the best! Really wanted to work on my pronunciation and confidence speaking and she delivers. Don't hesitate and book!",
  },
  {
    language: "vietnamese",
    name: "LaMott",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "On my 2nd lesson and things are really beginning to take shape. I'm getting a better understanding of vowels as well as the other points I hadn't known before the lesson. Looking forward to the next one!",
  },
  {
    language: "vietnamese",
    name: "Marie",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "If you want to learn Vietnamese, don't hesitate for a second to take lessons with Diệp! She adapts to our needs, is very dynamic, makes us practice a lot, and does so with a good mood.",
  },
  {
    language: "vietnamese",
    name: "Duy",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "Diep is an excellent teacher who makes the lessons varied and motivating. She challenges me specifically so that I can speak the language even better. The lessons are a lot of fun with her - Thank you very much.",
  },
  {
    language: "vietnamese",
    name: "van",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "Diệp is an excellent tutor who is so patient, effusive, fun, relatable, personable, and prepared to guide you through learning Vietnamese  from starting in basic sounds and diacritics, to setting up your foundation for structure and vocab, to easy conversations that feel very supportive and encouraging. I came in as a Vietnamese-American who did not learn much growing up, and her classes and tutelage have helped me learn to read and write in Vietnamese for the first time, and provided constructive, productive feedback for conversational Vietnamese. Bonus: my family has been very complimentary on how much I've improved. Highly recommend, it's been a true delight so far!",
  },
  {
    language: "vietnamese",
    name: "Juan",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "Amazing teacher, she puts a lot on the class preparation, makes great exercises to practice, is very patient and generous.",
  },
  {
    language: "vietnamese",
    name: "Kelly",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "Diệp is an incredible tutor! She's a fantastic conversation partner and I learn so much with her. She has a great blend of preparation but also going with the flow. I always leave my lessons having learned a lot and having clear homework to work on for the next class. Diệp is so much fun to talk to and is helping me improve my Vietnamese every week. Her English is fantastic so it's easy for her to explain things in English if I don't understand in Vietnamese. I highly recommend her to anyone looking to learn!",
  },
  {
    language: "vietnamese",
    name: "Caity",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "I love learning with Diệp! My Vietnamese has progressed enormously since I started working with her a few months ago. She tailors the lessons to my goals and progress, is very organized, and is a fun and personable teacher. I highly recommend working with her!",
  },
  {
    language: "vietnamese",
    name: "Diana",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "Amazing! Diệp is incredibly passionate and efficient, and it truly shows in every lesson. The quality of her materials is impressive.. theyre super well-structured, with clear explanations and helpful videos. In just a few lessons, shes helped me grasp the basics of Vietnamese, improve my pronunciation, learn essential phrases and numbers, and even start reading! Shes also been sharing useful phrases and travel tips for my upcoming trip to Vietnam, which is such a bonus. Vietnamese is a fascinating language, and as an Italian speaker, it can feel a bit overwhelming at first. But Diệp has this incredible ability to make you feel confident and capable of learning it. As a language teacher myself, I can really recognize a great teacher, and shes one of the best Ive ever encountered.",
  },
  {
    language: "vietnamese",
    name: "Minh",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "Always well prepared and we're having much fun through the lessons and I learned a lot since the beginning! I can really recommend taking Diệp's lessons!",
  },
  {
    language: "vietnamese",
    name: "Tyler",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "Diệp has been a great tutor teaching me both the foundational basics of Vietnamese and focused phrases for traveling Vietnam. She is congenial, patient, and great at clarifying exactly how nuances in the language are to be done properly. Really enjoy my lessons with her!",
  },
  {
    language: "vietnamese",
    name: "Marie",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "She meets you at the level you are, and uses visual as well as other means to learn. She has a good global view of language. I highly recommend her. She's amazing!",
  },
  {
    language: "vietnamese",
    name: "Michel",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "Diệp is a great teacher, with excellent pedagogy skills, strong involvement in teaching and finding ways to help for progress in talking, listening and writing. She is also a very nice person and learning with her is very pleasant. Im really happy to have choosen her as my Vietnamese teacher, and I highly recommend her.",
  },
  {
    language: "vietnamese",
    name: "Jessica",
    rating: 5,
    date: "",
    source: "Preply",
    sourceUrl: "https://preply.com/en/tutor/2553268",
    quote:
      "Ive been working with Diệp for the last 7 months. She is an amazing tutor and has tailored our lessons to my skill level (Vietnamese-American with very basic fluency) and goals. I have an interest in medical terminology so that I am able to speak with patients. She developed role play scenarios and Diệp has helped me gain confidence in my Vietnamese to be able to converse with my patients. My friends and family has noticed a difference in my proficiency in the short amount of time we have been working together. I dont know what Id do without her! Highly recommend!",
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
