import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiJavascript,
  SiMongodb,
  SiPython,
  SiReactquery,
  SiShadcnui,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiSpringboot,
  SiApachekafka,
  SiRedis,
  SiTensorflow,
  SiOpencv,
  SiKeras,
  SiNumpy,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  threejs: {
    title: "Three.js",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <FaJava />,
  },
  springBoot: {
    title: "Spring Boot",
    bg: "black",
    fg: "white",
    icon: <SiSpringboot />,
  },
  kafka: {
    title: "Apache Kafka",
    bg: "black",
    fg: "white",
    icon: <SiApachekafka />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiOpencv />,
  },
  keras: {
    title: "Keras",
    bg: "black",
    fg: "white",
    icon: <SiKeras />,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <SiNumpy />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "gan-video-enhancement",
    category: "Deep Learning",
    title: "GAN Video Super-Resolution",
    src: "/assets/projects-screenshots/gan-video/landing.png",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.tensorflow,
        PROJECT_SKILLS.opencv,
      ],
    },
    github: "https://github.com/AyushPrakash414/GAN-based-Video-Super-Resolution",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            🎬 GAN-Based Video Super-Resolution & Enhancement
          </TypographyP>
          <TypographyP className="font-mono">
            A robust 12-stage pipeline for transforming low-quality, noisy, or
            interlaced videos into high-definition, smooth, and crystal-clear
            masterpieces using State-of-the-Art Deep Learning models.
          </TypographyP>
          <ProjectsLinks repo={this.github} live={this.live} />

          <TypographyH3 className="my-4 mt-8">What is this Project?</TypographyH3>
          <p className="font-mono mb-2">
            This project is an advanced, fully automated video restoration
            pipeline. It leverages Generative Adversarial Networks (GANs) and
            specialized neural network architectures to tackle severe video
            degradations — from interlacing artifacts and camera shake to
            low-light noise and blurry faces.
          </p>

          <TypographyH3 className="my-4 mt-8">Key Models</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li>🌌 <strong>FastDVDnet</strong> — Deep spatio-temporal video denoising</li>
            <li>🔍 <strong>Real-ESRGAN</strong> — High-fidelity 4x upscaling and super-resolution</li>
            <li>👤 <strong>GFPGAN</strong> — Blind face restoration</li>
            <li>🎞️ <strong>FFmpeg</strong> — Video normalization, stabilization, and reconstruction</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">The 12-Stage Pipeline</TypographyH3>
          <ol className="list-decimal ml-6 font-mono space-y-1">
            <li>Normalization — Standardizes video format, codecs, and framerate</li>
            <li>Deinterlacing — Removes comb-like artifacts from interlaced footage</li>
            <li>Stabilization — Smooths out camera shake and jitter</li>
            <li>Deflickering — Eliminates brightness fluctuations</li>
            <li>Presharpening — Enhances edges for deep denoising</li>
            <li>Frame Extraction — Splits video into individual frames</li>
            <li>FastDVDnet Denoising — Temporal noise removal preserving textures</li>
            <li>Real-ESRGAN Super-Resolution — 4x upscaling with detail prediction</li>
            <li>Detail Refinement — Subtle contrast and sharpening post-upscaling</li>
            <li>GFPGAN Face Enhancement — Detects and restores faces</li>
            <li>Temporal Smoothing — Color/light consistency across frames</li>
            <li>Final Reconstruction — Merges frames into seamless HD .mp4</li>
          </ol>
        </div>
      );
    },
  },
  {
    id: "secure-image-vault",
    category: "Security / Encryption",
    title: "Secure Image Vault",
    src: "/assets/projects-screenshots/secure-vault/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    live: "https://secure-image-vault.vercel.app",
    github: "https://github.com/AyushPrakash414/Secure-Image-Vault",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            🛡️ Secure Image Vault
          </TypographyP>
          <TypographyP className="font-mono">
            Professional client-side image encryption application with
            pixel-level security. Transform your images into unreadable noise
            using military-grade encryption — fully reversible, zero quality
            loss, entirely in your browser.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li>🔐 <strong>Pixel-Level Encryption</strong> — Every RGB value is mathematically transformed</li>
            <li>🎯 <strong>Zero Quality Loss</strong> — Perfect reconstruction with the correct secret key</li>
            <li>🌐 <strong>Client-Side Only</strong> — No server uploads, complete privacy</li>
            <li>⚡ <strong>Batch Processing</strong> — Encrypt/decrypt multiple images simultaneously</li>
            <li>🎨 <strong>Modern UI</strong> — Premium glassmorphism design with smooth animations</li>
            <li>🌓 <strong>Dark/Light Theme</strong> — Elegant theme switching</li>
            <li>📱 <strong>Fully Responsive</strong> — Works on desktop, tablet, and mobile</li>
            <li>💾 <strong>Instant Download</strong> — Download encrypted/decrypted images individually or in bulk</li>
          </ul>

          <p className="font-mono mb-2 mt-8 text-center">
            Your images never leave your device. Complete privacy guaranteed.
          </p>
        </div>
      );
    },
  },
  {
    id: "cube-tutor-ai",
    category: "AI / 3D Web App",
    title: "Cube Tutor AI",
    src: "/assets/projects-screenshots/cube-tutor/landing.png",
    screenshots: [],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.threejs,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [],
    },
    live: "https://cube-tutor-ai.vercel.app",
    github: "https://github.com/AyushPrakash414/cube-tutor-ai",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            🧊 Cube Tutor AI
          </TypographyP>
          <TypographyP className="font-mono">
            An interactive web-based Rubik&apos;s Cube solver and tutorial
            application. Input your scrambled cube using camera capture or manual
            color painting, then get step-by-step visual guidance to solve it
            with 3D visualization and real-time animation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Multiple Input Methods</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li>📷 <strong>Camera Capture</strong> — Scan cube faces with automatic color detection</li>
            <li>🎨 <strong>Manual Input</strong> — Paint cube colors using interactive cube net editor</li>
            <li>🎲 <strong>Random Scramble</strong> — Generate random scrambles to practice</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">3D Visualization</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li>Interactive 3D cube using Three.js with real-time rotation & animation</li>
            <li>Face highlighting with visual indicators</li>
            <li>Animated glow effect when cube is solved</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Solving & Instructions</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li>Automatic solving using Kociemba&apos;s algorithm</li>
            <li>Step-by-step guidance with animated moves</li>
            <li>Phase-based learning (White Cross → White Corners → Middle → Final Layer)</li>
            <li>Each step includes description, direction, and helpful tips</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Intelligent Color Detection</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li>HSV-based detection with robust color recognition</li>
            <li>Outlier trimming and circular mean for accurate hue averaging</li>
            <li>Manual corrections on a sticker-by-sticker basis</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "anomalous-sound-detection",
    category: "Deep Learning / Signal Processing",
    title: "Anomalous Sound Detection",
    src: "/assets/projects-screenshots/anomaly/landing.png",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.tensorflow,
        PROJECT_SKILLS.keras,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.numpy,
      ],
    },
    github: "https://github.com/AyushPrakash414/Anomalous-Sound-Detection",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            🔊 Anomalous Sound Detection using Spectrograms
          </TypographyP>
          <TypographyP className="font-mono">
            A deep learning project that detects machine anomalies by converting
            audio signals into visual spectrogram representations and analyzing
            them using Convolutional Neural Networks (CNNs).
          </TypographyP>
          <ProjectsLinks repo={this.github} live={this.live} />

          <TypographyH3 className="my-4 mt-8">How It Works</TypographyH3>
          <ol className="list-decimal ml-6 font-mono space-y-1">
            <li>Converts raw audio files into spectrogram images using STFT</li>
            <li>Trains an autoencoder model to learn &quot;normal&quot; sound patterns</li>
            <li>Uses reconstruction error and Mahalanobis distance metrics to detect anomalies</li>
            <li>Classifies patterns into 3 severity levels: Normal, Medium Anomaly, Severe Anomaly</li>
          </ol>

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li>✅ Audio-to-spectrogram conversion using STFT</li>
            <li>✅ Preprocessing pipeline (grayscale, resizing, normalization)</li>
            <li>✅ Autoencoder training on normal patterns</li>
            <li>✅ Mahalanobis-based anomaly scoring (robust & statistically sound)</li>
            <li>✅ KMeans clustering for severity classification</li>
            <li>✅ Visualization of anomaly clusters</li>
            <li>✅ Pretrained model included for quick inference</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Detection Metrics</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li><strong>Reconstruction Error</strong> — Pixel-wise difference between original and reconstructed images</li>
            <li><strong>Mahalanobis Distance</strong> — Statistical distance in latent PCA space</li>
            <li><strong>PCA Dimensionality Reduction</strong> — Stabilizes covariance matrix for anomaly scoring</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "secure-journal-app",
    category: "Backend / Microservices",
    title: "Secure Journal Application",
    src: "/assets/projects-screenshots/journal/landing.png",
    screenshots: [],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.springBoot,
        PROJECT_SKILLS.kafka,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.docker,
      ],
    },
    github: "https://github.com/AyushPrakash414/journalApp",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            📔 Secure Journal Application
          </TypographyP>
          <TypographyP className="font-mono">
            A production-grade backend application built with Spring Boot,
            featuring JWT + OAuth2 authentication, event-driven microservices
            with Kafka messaging, and Redis caching for high-performance API
            responses.
          </TypographyP>
          <ProjectsLinks repo={this.github} live={this.live} />

          <TypographyH3 className="my-4 mt-8">Key Highlights</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li>🔐 JWT + OAuth2 secured backend with role-based authentication and RESTful APIs</li>
            <li>📨 Event-driven microservices with Kafka messaging and Redis caching, improving response time by 40%</li>
            <li>🚀 Scalable REST APIs handling 10K+ requests with optimized MongoDB queries and indexing</li>
            <li>🛡️ Rate limiting, logging, and centralized exception handling, reducing failures by 30%</li>
            <li>🐳 Dockerized services and tested 50+ endpoints using Postman</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <ul className="list-disc ml-6 font-mono space-y-1">
            <li><strong>Framework:</strong> Spring Boot</li>
            <li><strong>Auth:</strong> JWT + OAuth2</li>
            <li><strong>Messaging:</strong> Apache Kafka</li>
            <li><strong>Cache:</strong> Redis</li>
            <li><strong>Database:</strong> MongoDB</li>
            <li><strong>Containerization:</strong> Docker</li>
          </ul>
        </div>
      );
    },
  },
];

export default projects;
