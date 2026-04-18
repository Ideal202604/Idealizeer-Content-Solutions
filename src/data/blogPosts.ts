export interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: '10 UI Design Trends to Watch in 2024',
    category: 'UI Trends',
    excerpt:
      'Explore the latest visual styles, interaction patterns, and design philosophies shaping the digital landscape this year.',
    date: 'Oct 12, 2023',
    author: 'Samantha Lee',
    image: 'bg-gradient-to-br from-purple-500 to-indigo-900',
    content: [
      'UI design in 2024 is centered around clear hierarchy, bold typography, and meaningful interactions that improve task completion.',
      'Teams are increasingly prioritizing accessibility and design systems to maintain quality as products scale across devices.',
      'Micro-interactions remain valuable, but the focus has shifted to purposeful motion that reinforces context rather than visual noise.'
    ]
  },
  {
    id: 2,
    title: 'How to Improve Core Web Vitals for React Apps',
    category: 'Web Dev',
    excerpt:
      'A comprehensive guide to optimizing your React applications for better performance and higher search rankings.',
    date: 'Oct 05, 2023',
    author: 'Marcus Johnson',
    image: 'bg-gradient-to-br from-emerald-500 to-teal-900',
    content: [
      'Core Web Vitals improvements typically come from reducing JavaScript payloads and avoiding expensive render paths.',
      'Use code splitting at route level, optimize image delivery, and monitor layout shifts introduced by late-loading assets.',
      'Measure before and after changes using Lighthouse and real-user monitoring to ensure optimizations impact real traffic.'
    ]
  },
  {
    id: 3,
    title: 'The Psychology of Color in Branding',
    category: 'Branding',
    excerpt:
      'Understanding how different colors affect consumer behavior and how to choose the right palette for your brand.',
    date: 'Sep 28, 2023',
    author: 'Elena Rodriguez',
    image: 'bg-gradient-to-br from-rose-500 to-pink-900',
    content: [
      'Color influences trust, urgency, and recall, making it one of the fastest emotional cues in visual communication.',
      'The strongest brand palettes are built around contrast and consistency, not just preference.',
      'Choosing color requires balancing cultural context, accessibility, and long-term brand recognition.'
    ]
  },
  {
    id: 4,
    title: 'Case Study: Scaling Whiteline',
    category: 'Case Studies',
    excerpt:
      'How we helped a local retailer transition to a robust online platform capable of handling 10k+ concurrent users.',
    date: 'Sep 15, 2023',
    author: 'Alex Rivera',
    image: 'bg-gradient-to-br from-blue-500 to-cyan-900',
    content: [
      'We started by auditing bottlenecks in checkout and catalog pages under high-traffic events.',
      'A phased architecture update improved cache hit rates, reduced server pressure, and stabilized user sessions.',
      'The launch resulted in a measurable lift in conversion while maintaining a fast browsing experience at peak load.'
    ]
  },
  {
    id: 5,
    title: 'Mastering Framer Motion in React',
    category: 'Web Dev',
    excerpt:
      'Learn how to create fluid, complex animations easily using the Framer Motion library.',
    date: 'Sep 02, 2023',
    author: 'Marcus Johnson',
    image: 'bg-gradient-to-br from-amber-500 to-orange-900',
    content: [
      'Framer Motion shines when paired with strong layout logic and predictable component state.',
      'Use staggered animations for content reveal and keep timing values consistent across the interface.',
      'For performance, animate transform and opacity before considering properties that trigger layout recalculation.'
    ]
  },
  {
    id: 6,
    title: 'Why Accessibility Should Be Your First Priority',
    category: 'UI Trends',
    excerpt:
      "Designing for everyone isn't just a legal requirement; it's good business. Here's how to start.",
    date: 'Aug 20, 2023',
    author: 'Samantha Lee',
    image: 'bg-gradient-to-br from-slate-500 to-slate-900',
    content: [
      'Accessibility improves usability for all users, not only users with permanent disabilities.',
      'Start with semantic structure, keyboard access, and color contrast checks for every key journey.',
      'Teams that include accessibility in design and QA workflows reduce rework and increase product quality.'
    ]
  }
];
