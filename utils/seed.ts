const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const builtWithSeedData = [
  {
    id: '1',
    name: 'Chakra UI',
    tag: [7],
    url: 'https://chakra-ui.com/',
    img_url:
      'https://res.cloudinary.com/bolub/image/upload/v1624178368/chakra-ui-simple-modular-accessible-ui-components-for-react-applications-removebg-preview.png',
  },
  {
    id: '2',
    name: 'Cloudinary',
    tag: [7],
    url: 'https://cloudinary.com',
    img_url:
      'https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png',
  },
  {
    id: '3',
    name: 'Next.js',
    tag: [7, 17],
    url: 'https://nextjs.org/',
    img_url:
      'https://res.cloudinary.com/bolub/image/upload/v1624154508/nextjs-3.svg',
  },
  {
    id: '4',
    name: 'Vercel',
    tag: [84],
    url: 'https://vercel.com/',
    img_url:
      'https://res.cloudinary.com/bolub/image/upload/v1624156541/vercel.svg',
  },
];

const seedTags = [
  {
    id: 1,

    name: 'ReactJS',

    createdAt: '2022-11-15T08:30:37.169Z',

    updatedAt: '2022-12-03T03:19:28.579Z',

    publishedAt: '2022-11-15T08:30:39.045Z',
  },

  {
    id: 84,

    name: 'Hosting',

    createdAt: new Date(),

    updatedAt: new Date(),

    publishedAt: '2022-11-15T08:30:39.045Z',
  },

  {
    id: 2,

    name: 'React Hooks',

    createdAt: '2022-11-15T08:30:45.274Z',

    updatedAt: '2022-12-03T03:19:28.588Z',

    publishedAt: '2022-11-15T08:30:46.874Z',
  },

  {
    id: 3,

    name: 'Course',

    createdAt: '2022-11-15T08:30:55.231Z',

    updatedAt: '2022-12-03T03:19:28.594Z',

    publishedAt: '2022-11-15T08:30:56.766Z',
  },

  {
    id: 4,

    name: 'Javascript',

    createdAt: '2022-11-20T08:23:01.268Z',

    updatedAt: '2022-12-03T03:19:28.601Z',

    publishedAt: '2022-11-20T08:23:03.028Z',
  },

  {
    id: 5,

    name: 'NextJS',

    createdAt: '2022-11-20T08:46:08.558Z',

    updatedAt: '2022-12-03T03:18:15.223Z',

    publishedAt: '2022-11-20T08:46:11.760Z',
  },

  {
    id: 6,

    name: 'CSS',

    createdAt: '2022-11-20T08:46:18.800Z',

    updatedAt: '2022-12-03T03:18:15.230Z',

    publishedAt: '2022-11-20T08:46:21.454Z',
  },

  {
    id: 7,

    name: 'Frontend',

    createdAt: '2022-11-20T08:46:38.051Z',

    updatedAt: '2022-12-03T03:19:28.608Z',

    publishedAt: '2022-11-20T08:46:39.450Z',
  },

  {
    id: 8,

    name: 'Axios',

    createdAt: '2022-11-20T08:48:06.447Z',

    updatedAt: '2022-12-03T03:17:15.907Z',

    publishedAt: '2022-11-20T08:48:08.077Z',
  },

  {
    id: 9,

    name: 'API',

    createdAt: '2022-11-20T08:50:19.365Z',

    updatedAt: '2022-12-03T03:17:15.913Z',

    publishedAt: '2022-11-20T08:50:20.957Z',
  },

  {
    id: 10,

    name: 'Charts',

    createdAt: '2022-11-20T08:51:35.594Z',

    updatedAt: '2022-12-03T03:17:15.920Z',

    publishedAt: '2022-11-20T08:51:37.244Z',
  },

  {
    id: 11,

    name: 'HTML',

    createdAt: '2022-11-20T09:57:18.279Z',

    updatedAt: '2022-12-03T03:17:15.926Z',

    publishedAt: '2022-11-20T09:57:19.586Z',
  },

  {
    id: 12,

    name: 'CSS Grid',

    createdAt: '2022-11-20T09:57:36.851Z',

    updatedAt: '2022-12-03T03:18:15.245Z',

    publishedAt: '2022-11-20T09:57:39.209Z',
  },

  {
    id: 13,

    name: 'CSS Art',

    createdAt: '2022-11-20T10:01:19.758Z',

    updatedAt: '2022-12-03T03:16:35.990Z',

    publishedAt: '2022-11-20T10:01:21.853Z',
  },

  {
    id: 14,

    name: 'Maps',

    createdAt: '2022-11-20T10:07:18.841Z',

    updatedAt: '2022-12-03T03:17:15.939Z',

    publishedAt: '2022-11-20T10:07:20.367Z',
  },

  {
    id: 15,

    name: 'Freelance',

    createdAt: '2022-11-20T10:19:58.057Z',

    updatedAt: '2022-12-03T03:16:36.005Z',

    publishedAt: '2022-11-20T10:19:59.762Z',
  },

  {
    id: 16,

    name: 'Billing',

    createdAt: '2022-11-20T10:20:14.943Z',

    updatedAt: '2022-12-03T03:16:36.011Z',

    publishedAt: '2022-11-20T10:20:16.243Z',
  },

  {
    id: 17,

    name: 'Backend',

    createdAt: '2022-11-20T10:20:26.964Z',

    updatedAt: '2022-12-03T03:17:15.946Z',

    publishedAt: '2022-11-20T10:20:28.217Z',
  },

  {
    id: 18,

    name: 'Google',

    createdAt: '2022-11-20T10:20:37.247Z',

    updatedAt: '2022-12-03T03:17:15.952Z',

    publishedAt: '2022-11-20T10:20:38.543Z',
  },

  {
    id: 19,

    name: 'Google Sheets',

    createdAt: '2022-11-20T10:20:46.353Z',

    updatedAt: '2022-12-03T03:17:15.959Z',

    publishedAt: '2022-11-20T10:20:47.538Z',
  },

  {
    id: 20,

    name: 'Interviews',

    createdAt: '2022-11-20T10:20:58.143Z',

    updatedAt: '2022-12-03T03:17:15.965Z',

    publishedAt: '2022-11-20T10:20:59.481Z',
  },

  {
    id: 21,

    name: 'FFmpeg',

    createdAt: '2022-11-20T10:21:13.284Z',

    updatedAt: '2022-12-03T03:17:15.972Z',

    publishedAt: '2022-11-20T10:21:14.940Z',
  },

  {
    id: 22,

    name: 'User Interface (UI)',

    createdAt: '2022-11-20T10:21:39.497Z',

    updatedAt: '2022-12-03T03:17:15.980Z',

    publishedAt: '2022-11-20T10:21:40.690Z',
  },

  {
    id: 23,

    name: 'User Experience (UX)',

    createdAt: '2022-11-20T10:21:52.571Z',

    updatedAt: '2022-12-03T03:17:15.987Z',

    publishedAt: '2022-11-20T10:21:53.773Z',
  },

  {
    id: 24,

    name: 'Dates',

    createdAt: '2022-11-20T10:22:10.110Z',

    updatedAt: '2022-12-03T03:16:36.073Z',

    publishedAt: '2022-11-20T10:22:11.556Z',
  },

  {
    id: 25,

    name: 'Icons',

    createdAt: '2022-11-20T10:22:18.763Z',

    updatedAt: '2022-12-03T03:16:36.080Z',

    publishedAt: '2022-11-20T10:22:20.126Z',
  },

  {
    id: 26,

    name: 'Fonts',

    createdAt: '2022-11-26T06:32:29.444Z',

    updatedAt: '2022-12-03T03:17:15.994Z',

    publishedAt: '2022-11-26T06:32:32.456Z',
  },

  {
    id: 27,

    name: 'Carousel',

    createdAt: '2022-11-26T06:34:48.233Z',

    updatedAt: '2022-12-03T03:17:16.001Z',

    publishedAt: '2022-11-26T06:34:50.811Z',
  },

  {
    id: 28,

    name: 'Slider',

    createdAt: '2022-11-26T06:34:56.826Z',

    updatedAt: '2022-12-03T03:17:16.007Z',

    publishedAt: '2022-11-26T06:34:58.967Z',
  },

  {
    id: 29,

    name: 'VueJS',

    createdAt: '2022-11-26T06:38:08.361Z',

    updatedAt: '2022-12-03T03:17:16.015Z',

    publishedAt: '2022-11-26T06:38:09.656Z',
  },

  {
    id: 30,

    name: 'Chakra UI',

    createdAt: '2022-11-26T09:56:56.310Z',

    updatedAt: '2022-12-03T03:17:16.022Z',

    publishedAt: '2022-11-26T09:56:57.772Z',
  },

  {
    id: 31,

    name: 'Special',

    createdAt: '2022-11-27T03:16:44.633Z',

    updatedAt: '2022-12-03T03:17:16.028Z',

    publishedAt: '2022-11-27T03:16:47.517Z',
  },

  {
    id: 32,

    name: 'Free',

    createdAt: '2022-11-27T03:57:07.376Z',

    updatedAt: '2022-12-03T03:17:16.034Z',

    publishedAt: '2022-11-27T03:57:08.655Z',
  },

  {
    id: 33,

    name: 'Course',

    createdAt: '2022-11-27T03:57:15.939Z',

    updatedAt: '2022-12-03T03:16:36.135Z',

    publishedAt: '2022-11-27T03:57:17.358Z',
  },

  {
    id: 34,

    name: 'Loader',

    createdAt: '2022-11-27T04:22:56.193Z',

    updatedAt: '2022-12-03T03:17:16.040Z',

    publishedAt: '2022-11-27T04:22:57.764Z',
  },

  {
    id: 35,

    name: 'Skeleton',

    createdAt: '2022-11-27T04:23:11.955Z',

    updatedAt: '2022-12-03T03:17:16.047Z',

    publishedAt: '2022-11-27T04:23:13.597Z',
  },

  {
    id: 36,

    name: 'Video',

    createdAt: '2022-11-27T05:16:20.814Z',

    updatedAt: '2022-12-03T03:17:16.055Z',

    publishedAt: '2022-11-27T05:16:22.555Z',
  },

  {
    id: 37,

    name: 'AI',

    createdAt: '2022-11-27T05:19:27.190Z',

    updatedAt: '2022-12-03T03:17:16.064Z',

    publishedAt: '2022-11-27T05:19:33.546Z',
  },

  {
    id: 38,

    name: 'Video Editor',

    createdAt: '2022-11-27T05:21:26.158Z',

    updatedAt: '2022-12-03T03:17:16.074Z',

    publishedAt: '2022-11-27T05:21:27.911Z',
  },

  {
    id: 39,

    name: 'Paid',

    createdAt: '2022-11-27T05:22:00.642Z',

    updatedAt: '2022-12-03T03:17:16.088Z',

    publishedAt: '2022-11-27T05:22:03.178Z',
  },

  {
    id: 40,

    name: 'Email',

    createdAt: '2022-11-27T05:24:16.876Z',

    updatedAt: '2022-12-03T03:17:16.095Z',

    publishedAt: '2022-11-27T05:24:18.210Z',
  },

  {
    id: 41,

    name: 'No code',

    createdAt: '2022-11-27T05:24:25.479Z',

    updatedAt: '2022-12-03T03:16:36.190Z',

    publishedAt: '2022-11-27T05:24:26.677Z',
  },

  {
    id: 42,

    name: 'Automation',

    createdAt: '2022-11-27T05:24:35.901Z',

    updatedAt: '2022-12-03T03:16:36.197Z',

    publishedAt: '2022-11-27T05:24:37.152Z',
  },

  {
    id: 43,

    name: 'Fake email',

    createdAt: '2022-11-27T05:24:53.901Z',

    updatedAt: '2022-12-03T03:17:16.101Z',

    publishedAt: '2022-11-27T05:24:55.490Z',
  },

  {
    id: 44,

    name: 'Image',

    createdAt: '2022-11-27T05:28:36.627Z',

    updatedAt: '2022-12-03T03:17:16.108Z',

    publishedAt: '2022-11-27T05:28:37.835Z',
  },

  {
    id: 45,

    name: 'Image Editor',

    createdAt: '2022-11-27T05:28:46.699Z',

    updatedAt: '2022-12-03T03:17:16.115Z',

    publishedAt: '2022-11-27T05:28:48.094Z',
  },

  {
    id: 46,

    name: 'Seo',

    createdAt: '2022-12-01T09:31:24.204Z',

    updatedAt: '2022-12-03T03:17:16.123Z',

    publishedAt: '2022-12-01T09:31:25.344Z',
  },

  {
    id: 47,

    name: 'Metatags',

    createdAt: '2022-12-01T09:31:37.013Z',

    updatedAt: '2022-12-03T03:17:16.129Z',

    publishedAt: '2022-12-01T09:31:38.359Z',
  },

  {
    id: 48,

    name: 'Application tour',

    createdAt: '2022-12-01T09:49:49.395Z',

    updatedAt: '2022-12-03T03:17:16.136Z',

    publishedAt: '2022-12-01T09:49:51.253Z',
  },

  {
    id: 49,

    name: 'Application walkthrough',

    createdAt: '2022-12-01T09:50:14.044Z',

    updatedAt: '2022-12-03T03:17:16.144Z',

    publishedAt: '2022-12-01T09:50:15.435Z',
  },

  {
    id: 50,

    name: 'Career',

    createdAt: '2022-12-01T10:10:11.553Z',

    updatedAt: '2022-12-03T03:52:21.884Z',

    publishedAt: '2022-12-03T03:52:21.881Z',
  },

  {
    id: 53,

    name: 'Typescript',

    createdAt: '2022-12-06T19:59:09.290Z',

    updatedAt: '2022-12-06T19:59:12.044Z',

    publishedAt: '2022-12-06T19:59:12.040Z',
  },

  {
    id: 54,

    name: 'NPM',

    createdAt: '2022-12-10T06:22:55.432Z',

    updatedAt: '2022-12-10T06:22:57.022Z',

    publishedAt: '2022-12-10T06:22:57.017Z',
  },

  {
    id: 55,

    name: 'Design system',

    createdAt: '2022-12-10T06:23:07.369Z',

    updatedAt: '2022-12-10T06:23:08.805Z',

    publishedAt: '2022-12-10T06:23:08.801Z',
  },

  {
    id: 56,

    name: 'Storybook',

    createdAt: '2022-12-10T06:24:55.297Z',

    updatedAt: '2022-12-10T06:24:56.616Z',

    publishedAt: '2022-12-10T06:24:56.612Z',
  },

  {
    id: 57,

    name: 'mock data',

    createdAt: '2023-01-25T03:14:37.019Z',

    updatedAt: '2023-01-25T03:14:48.999Z',

    publishedAt: '2023-01-25T03:14:39.080Z',
  },

  {
    id: 58,

    name: 'tests',

    createdAt: '2023-01-25T03:14:56.195Z',

    updatedAt: '2023-01-25T03:14:57.451Z',

    publishedAt: '2023-01-25T03:14:57.448Z',
  },

  {
    id: 59,

    name: 'Image upload',

    createdAt: '2023-02-03T01:51:26.513Z',

    updatedAt: '2023-02-03T01:51:28.704Z',

    publishedAt: '2023-02-03T01:51:28.700Z',
  },

  {
    id: 60,

    name: 'Image preview',

    createdAt: '2023-02-03T01:51:35.671Z',

    updatedAt: '2023-02-03T01:51:37.285Z',

    publishedAt: '2023-02-03T01:51:37.281Z',
  },

  {
    id: 61,

    name: 'Drag n Drop',

    createdAt: '2023-02-03T01:53:08.148Z',

    updatedAt: '2023-02-03T01:53:09.513Z',

    publishedAt: '2023-02-03T01:53:09.510Z',
  },

  {
    id: 62,

    name: 'Low code',

    createdAt: '2023-02-05T15:08:05.525Z',

    updatedAt: '2023-02-05T15:08:07.077Z',

    publishedAt: '2023-02-05T15:08:07.037Z',
  },

  {
    id: 64,

    name: 'State management',

    createdAt: '2023-02-05T15:12:49.514Z',

    updatedAt: '2023-02-05T15:12:50.879Z',

    publishedAt: '2023-02-05T15:12:50.871Z',
  },

  {
    id: 65,

    name: 'Solid',

    createdAt: '2023-02-05T15:22:07.108Z',

    updatedAt: '2023-02-05T15:22:08.767Z',

    publishedAt: '2023-02-05T15:22:08.762Z',
  },

  {
    id: 66,

    name: 'Svelte',

    createdAt: '2023-02-05T15:22:15.121Z',

    updatedAt: '2023-02-05T15:22:17.840Z',

    publishedAt: '2023-02-05T15:22:17.836Z',
  },

  {
    id: 67,

    name: 'database',

    createdAt: '2023-02-09T14:37:36.524Z',

    updatedAt: '2023-02-09T14:37:37.913Z',

    publishedAt: '2023-02-09T14:37:37.909Z',
  },

  {
    id: 68,

    name: 'Node',

    createdAt: '2023-02-09T17:02:10.862Z',

    updatedAt: '2023-02-09T17:02:12.654Z',

    publishedAt: '2023-02-09T17:02:12.650Z',
  },

  {
    id: 69,

    name: 'Authentication',

    createdAt: '2023-02-09T17:03:30.138Z',

    updatedAt: '2023-02-09T17:03:31.409Z',

    publishedAt: '2023-02-09T17:03:31.404Z',
  },

  {
    id: 70,

    name: 'Postgres',

    createdAt: '2023-02-09T17:04:08.918Z',

    updatedAt: '2023-02-09T17:04:10.181Z',

    publishedAt: '2023-02-09T17:04:10.177Z',
  },

  {
    id: 71,

    name: 'Realtime',

    createdAt: '2023-02-09T17:04:15.629Z',

    updatedAt: '2023-02-09T17:04:16.924Z',

    publishedAt: '2023-02-09T17:04:16.918Z',
  },

  {
    id: 72,

    name: 'Storage',

    createdAt: '2023-02-09T17:04:43.568Z',

    updatedAt: '2023-02-09T17:04:45.873Z',

    publishedAt: '2023-02-09T17:04:45.869Z',
  },

  {
    id: 73,

    name: 'Redux',

    createdAt: '2023-02-11T06:15:00.310Z',

    updatedAt: '2023-02-11T06:15:02.072Z',

    publishedAt: '2023-02-11T06:15:02.068Z',
  },

  {
    id: 74,

    name: 'Illustration',

    createdAt: '2023-03-06T20:51:13.082Z',

    updatedAt: '2023-03-06T20:51:18.176Z',

    publishedAt: '2023-03-06T20:51:18.173Z',
  },

  {
    id: 75,

    name: 'Design',

    createdAt: '2023-03-06T20:53:28.021Z',

    updatedAt: '2023-03-06T20:53:29.570Z',

    publishedAt: '2023-03-06T20:53:29.566Z',
  },

  {
    id: 76,

    name: 'notion',

    createdAt: '2023-03-09T17:29:14.257Z',

    updatedAt: '2023-03-09T17:29:15.863Z',

    publishedAt: '2023-03-09T17:29:15.860Z',
  },

  {
    id: 77,

    name: 'Timezone',

    createdAt: '2023-03-16T06:05:59.900Z',

    updatedAt: '2023-03-16T06:06:01.377Z',

    publishedAt: '2023-03-16T06:06:01.373Z',
  },

  {
    id: 78,

    name: 'React native',

    createdAt: '2023-04-18T07:26:23.028Z',

    updatedAt: '2023-04-18T07:26:24.485Z',

    publishedAt: '2023-04-18T07:26:24.482Z',
  },

  {
    id: 79,

    name: 'Styling',

    createdAt: '2023-04-18T07:26:32.108Z',

    updatedAt: '2023-04-18T07:26:38.762Z',

    publishedAt: '2023-04-18T07:26:38.759Z',
  },

  {
    id: 80,

    name: 'Tailwindcss',

    createdAt: '2023-04-18T07:26:50.318Z',

    updatedAt: '2023-04-18T07:26:51.712Z',

    publishedAt: '2023-04-18T07:26:51.709Z',
  },

  {
    id: 81,

    name: 'documentation',

    createdAt: '2023-07-18T03:58:14.417Z',

    updatedAt: '2023-07-18T03:58:15.983Z',

    publishedAt: '2023-07-18T03:58:15.980Z',
  },

  {
    id: 82,

    name: 'Finance',

    createdAt: '2023-07-18T10:12:11.038Z',

    updatedAt: '2023-07-18T10:12:12.615Z',

    publishedAt: '2023-07-18T10:12:12.611Z',
  },

  {
    id: 83,

    name: 'Product',

    createdAt: '2023-07-23T07:29:23.051Z',

    updatedAt: '2023-07-23T07:29:24.492Z',

    publishedAt: '2023-07-23T07:29:24.490Z',
  },
];

const seedPosts = [
  {
    id: '1',
    title: 'Next.js getStaticPaths annoying error fix',
    summary: 'A small rant and fix for a Next.js bug I encountered',
    content:
      "🤦‍♂️, This was a very annoying bug to figure out, basically anytime we use getStaticPaths, the id to pass must be a string. Now I'm using strapi right  and ids are generally numbers, so imagine my surprise when everything crashed😭.\n\nAnyways let's Illustrate, below is the code for getting blog posts\n\nexport const getStaticPaths = async ({ params }) => {\n\n  const response = await axios.get(\n    `${process.env.NEXT_PUBLIC_BASE_URL}/blog-posts`\n  );\n\n  const posts = response.data;\n\n\n  const paths = posts.map((post) => ({\n    params: { id: (post.id) },\n  }));\n\n\n  return { paths, fallback: false };\n};\n\n\nHere is where our problem lies\n\n\n  const paths = posts.map((post) => ({\n    params: { id: post.id },\n  }));\n\n\npost.id is supposed to be a string, so to fix this particular issue, we do a little bit of black magic here\n\n\n  const paths = posts.map((post) => ({\n    params: { id: post.id.toString() },\n  }));\n\n\nAnd works like a charm, *sighs, sometimes I wish i could quit software development and probably try catering or something\n",
    tags: [7, 5, 1],
    image_url: '',
  },
  {
    id: '4',
    title: 'Centering Anything, and I mean anything with CSS(and Flexbox)',
    summary: '',
    content:
      "Centering text, Centering elements, a pain in the neck for frontend developers everywhere. We're going to be using flexbox to battle this so I'm assuming you already have a fair knowledge on the subject, If not, here's a link  [https://www.w3schools.com/css/css3_flexbox.asp](link) to help<br/><br/>\n\nDiving right in, we're going  to center this button <br/><br/>\n\n//HTML\n```\n<div class=\"flex-container\">\n  <button>I am centered</button>\n</div>\n```\n\n<br/><br/>\n//CSS\n```\n.flex-container{\n  display:flex;\n  justify-content: center;\n  align-items: center\n\n  // not relevant to actual centering\n  height: 100px;\n  width: 100px;\n  border: 2px solid red\n}\n```\n",
    tags: [7, 6, 11],
    image_url: '',
  },
  {
    id: '3',
    title: 'Stop dropdowns and menus from closing on inspect',
    summary: '',
    content:
      '- Navigate to your webpage and use the key combinations Command + Shift + C (on mac) or Ctrl Shift C (on windows).\n\n- Once the inspect menu is opened, use the key combinations Command +  shift + P on mac\n  ![Screenshot 2022-11-24 at 06.11.58.png](https://fast-shelf-20323.herokuapp.com/uploads/Screenshot_2022_11_24_at_06_11_58_95aae29641.png)\n\n- Type "focus" and click the "Emulate a focused page" option\n![Screenshot 2022-11-24 at 06.14.00.png](https://fast-shelf-20323.herokuapp.com/uploads/Screenshot_2022_11_24_at_06_14_00_a92a8542b2.png)\n\n- Your dropdowns or menus should pause when you inspect them noe\n',
    tags: [7, 6, 11, 5, 1],
    image_url: '',
  },
  {
    id: '5',
    title: 'Update NPM to latest version',
    summary: '',
    content:
      '<br/><br/>\n\n```npm install -g npm@latest```\n\n<br/>\n\nmacOS and Linux systems might have permission issues, running in sudo mode solves this i.e\n\n<br/>\n\n```sudo npm install -g npm@latest```\n\n<br/>\n\nRead more [**here**](https://docs.npmjs.com/try-the-latest-stable-version-of-npm)',
    tags: [7, 17, 68],
    image_url: '',
  },
];

const main = async () => {
  for (const tag of seedTags) {
    await prisma.tag.upsert({
      where: { id: tag.id.toString() },
      update: {
        name: tag.name,
        createdAt: tag.createdAt,
        updatedAt: tag.updatedAt,
      },
      create: {
        id: tag.id.toString(),
        name: tag.name,
        createdAt: tag.createdAt,
        updatedAt: tag.updatedAt,
      },
    });
  }

  builtWithSeedData.forEach(async (bw) => {
    await prisma.builtWith.upsert({
      where: { id: bw.id },
      update: {
        name: bw.name,
        image_url: bw.img_url,
      },
      create: {
        id: bw.id.toString(),
        name: bw.name,
        image_url: bw.img_url,
        status: 'PUBLISHED',
        tags: {
          connect: bw.tag.map((tag) => ({
            id: tag.toString(),
          })),
        },
      },
    });
  });

  seedPosts.forEach(async (post) => {
    await prisma.post.upsert({
      where: { id: post.id },
      update: {
        title: post.title,
        image_url: post.image_url,
        summary: post.summary,
        content: post.content,
      },
      create: {
        id: post.id.toString(),
        title: post.title,
        image_url: post.image_url,
        summary: post.summary,
        content: post.content,
        status: 'PUBLISHED',
        tags: {
          connect: post.tags.map((tag) => ({
            id: tag.toString(),
          })),
        },
      },
    });
  });
};

main();
