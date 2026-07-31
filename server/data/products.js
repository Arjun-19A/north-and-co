const products = [
  {
    name: "Oversized Fit Cotton T-shirt",
    description:
      "Oversized-fit T-shirt crafted from soft premium cotton jersey with a comfortable crew neckline and dropped shoulders. Features a printed motif on the front for a modern streetwear look. Designed for everyday comfort with a relaxed silhouette that's easy to style with jeans, cargos, or shorts.",

    price: 1499.0,
    discountPrice: 1299.0,
    countInStock: 20,

    sku: "TS-OVR-001",

    category: "Topwear",

    brand: "Urban Threads",

    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: ["Black", "Ivory"],

    collectionName: "Summer Essentials",

    material: "100% Cotton",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/d3/4d/d34dc6d7d2b371275a45398323209d66e20184f9.jpg?imwidth=2160",
        altText: "Oversized Fit Motif-detail Cotton T-shirt Front black View",
      },
      {
        url: "https://image.hm.com/assets/hm/92/fb/92fbc263cf7dc74b8f0cf890be1dc81d22863bba.jpg?imwidth=2160",
        altText: "Oversized Fit Motif-detail Cotton T-shirt Black View",
      },
      {
        url: "https://image.hm.com/assets/hm/10/6f/106fe907d75748e84513d456869c457314654051.jpg?imwidth=2160",
        altText: "Oversized Fit Motif-detail Cotton T-shirt black Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/0e/f1/0ef1db3e93db8327e82268d7991e40c8fc8d3aa7.jpg?imwidth=2160",
        altText: "Oversized Fit Motif-detail Cotton T-shirt wihte front View",
      },
      {
        url: "https://image.hm.com/assets/hm/e4/f4/e4f4be1c9edaf8af12e6c01b347fdea56f4dcf66.jpg?imwidth=2160",
        altText: "Oversized Fit Motif-detail Cotton T-shirt Model white View",
      },
    ],

    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Galaxy Back Graphic Cotton T-Shirt",
    description:
      "A modern oversized cotton T-shirt featuring a bold galaxy-inspired graphic print on the back and a clean minimalist front. Crafted from soft, breathable cotton for all-day comfort, this casual tee offers a relaxed fit that's perfect for everyday wear, streetwear styling, and weekend outings.",

    price: 999.0,
    discountPrice: 799.0,
    countInStock: 35,

    sku: "GT-TS-002",

    category: "Topwear",
    brand: "Urban Threads",

    sizes: ["M", "L", "XL"],

    colors: ["Black"],

    collectionName: "Casual Essentials",

    material: "100% Cotton",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/76/cf/76cfa58ffe761d071ca2ef76c41c6daef3c4e689.jpg?imwidth=2160",
        altText: "Galaxy Back Graphic Cotton T-Shirt back view",
      },
      {
        url: "https://image.hm.com/assets/hm/be/3c/be3c5424f5431011e0963114b8c88937678dff7b.jpg?imwidth=2160",
        altText: "Galaxy Back Graphic Cotton T-Shirt side view",
      },
      {
        url: "https://image.hm.com/assets/hm/67/e3/67e3d8d5b019bda49e2e5f9d37e51f8f51db0982.jpg?imwidth=2160",
        altText: "Galaxy Back Graphic Cotton T-Shirt worn by model",
      },
    ],

    rating: 4.8,
    numReviews: 15,
  },
  {
    name: "Knitted V-Neck Polo Shirt",

    description:
      "A sophisticated knitted polo shirt designed with a modern V-neck collar and textured knit fabric for a refined yet relaxed look. Crafted from a soft, breathable cotton blend, it offers all-day comfort and effortless style. Perfect for smart-casual occasions, weekend outings, vacations, or everyday wear.",

    price: 799.0,
    discountPrice: 699.0,
    countInStock: 15,

    sku: "KP-PL-003",

    category: "Topwear",

    brand: "Modern Fit",

    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: ["Beige"],

    collectionName: "Casual Essentials",

    material: "Cotton Blend",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/f3/2a/f32ac44e2842f4a08481e71c40d88de3c53f08c1.jpg?imwidth=2160",
        altText: "Knitted V-Neck Polo Shirt front view",
      },
      {
        url: "https://image.hm.com/assets/hm/bf/e1/bfe1d8b541fd983147fb6ead04b80e6989d666bb.jpg?imwidth=2160",
        altText: "Knitted V-Neck Polo Shirt back view",
      },
    ],

    rating: 4.6,
    numReviews: 8,
  },
  {
    name: "Relaxed Fit Linen-Blend Shirt",

    description:
      "A relaxed-fit shirt crafted from a breathable cotton and linen blend for lightweight comfort and effortless style. Designed with a classic turn-down collar, button-front closure, chest pocket, adjustable button cuffs, and a rounded hem. The natural texture of the fabric offers a refined yet casual look, making it ideal for warm-weather outings, vacations, or everyday smart-casual wear.",

    price: 1999.0,
    discountPrice: 1999.0,

    countInStock: 25,

    sku: "LB-SH-004",

    category: "Topwear",

    brand: "Modern Fit",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Brown"],

    collectionName: "Winter Essentials",

    material: "Cotton & Linen Blend",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/52/15/5215351ae09bfa008248fd8e974487b54eefd228.jpg?imwidth=2160",
        altText: "Relaxed Fit Linen-Blend Shirt front view",
      },
      {
        url: "https://image.hm.com/assets/hm/58/9a/589a2651a3ad9c2a6adc9bc8af59607130c02269.jpg?imwidth=2160",
        altText: "Relaxed Fit Linen-Blend Shirt back view",
      },
      {
        url: "https://image.hm.com/assets/hm/3d/3c/3d3cad6f2ec6f7fdc8e6b15be0fa36ca8ecb6273.jpg?imwidth=2160",
        altText: "Relaxed Fit Linen-Blend Shirt side profile",
      },
      {
        url: "https://image.hm.com/assets/hm/a3/da/a3daf8642812c2ef90ee3012b38f71b12c68da18.jpg?imwidth=2160",
        altText: "Relaxed Fit Linen-Blend Shirt worn by model",
      },
    ],

    rating: 4.4,
    numReviews: 10,
  },
  {
    name: "Water-Repellent Nylon Windbreaker",

    description:
      "A lightweight windbreaker crafted from durable water-repellent nylon to keep you comfortable during unpredictable weather. Designed with a full-zip front, adjustable hood, elastic cuffs, and zippered side pockets, it offers a relaxed fit that's perfect for layering. Ideal for daily wear, travel, and outdoor activities.",

    price: 2999.0,
    discountPrice: 2499.0,

    countInStock: 18,

    sku: "WB-JK-005",

    category: "Topwear",

    brand: "Northline",

    sizes: ["S", "M", "L", "XL"],

    colors: ["Black"],

    collectionName: "Active Wear",

    material: "100% Nylon",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/5a/bf/5abfd7b348fbd3fd32fce77a6c2dfbe2607bfe89.jpg?imwidth=2160",
        altText: "Water-Repellent Nylon Windbreaker front view",
      },
      {
        url: "https://image.hm.com/assets/hm/85/f5/85f57d71a738fad799d413809c095fccf2c23aa8.jpg?imwidth=2160",
        altText: "Water-Repellent Nylon Windbreaker view",
      },
    ],

    rating: 4.7,
    numReviews: 22,
  },
  {
    name: "Soft Rib Knit Cardigan",

    description:
      "A cozy rib-knit cardigan designed with a relaxed silhouette and a wide collar for an elevated everyday look. Finished with a button-down front and soft stretch fabric that offers warmth and comfort, making it perfect for layering over tops, dresses, or knitwear throughout the season.",

    price: 2799.0,

    discountPrice: 2299.0,

    countInStock: 24,

    sku: "CARD-W-008",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Light grey marl"],

    collectionName: "Winter Essentials",

    material: "Rib Knit",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/83/cd/83cdbe2f4fd77afc76259ab7bac3cdc5aa65138f.jpg?imwidth=2160",
        altText: "Soft Rib Knit Cardigan Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/1c/c8/1cc80308045eafc075cecf9bac8c209ab42754f7.jpg?imwidth=2160",
        altText: "Soft Rib Knit Cardigan Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/3b/e3/3be3f5d97e2921f566edc364e6a1b5527f242646.jpg?imwidth=2160",
        altText: "Soft Rib Knit Cardigan Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/1b/3b/1b3b0dd9f09565960e13c4b3753c0fbf02fcb5db.jpg?imwidth=2160",
        altText: "Soft Rib Knit Cardigan Detail View",
      },
    ],
    isFeatured: true,

    rating: 4.7,

    numReviews: 19,
  },
  {
    name: "Relaxed Fit Padded Overshirt",

    description:
      "A relaxed-fit padded overshirt crafted from soft woven fabric for effortless everyday layering. Designed with a classic turn-down collar, press-stud front fastening, quilted lining, dropped shoulders, and adjustable press-stud cuffs. The checked pattern and lightly padded construction provide warmth and comfort while maintaining a clean, contemporary silhouette.",

    price: 3999.0,
    discountPrice: 2969.0,

    countInStock: 18,

    sku: "OVR-SH-007",

    category: "Topwear",

    brand: "Urban Threads",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Dark Blue", "Brown"],

    collectionName: "Urban Street",

    material: "Cotton Blend",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/01/01/0101e2861f8150ea55036e9bde40929b697b5343.jpg?imwidth=2160",
        altText: "Relaxed Fit Padded Overshirt front view",
      },
      {
        url: "https://image.hm.com/assets/hm/f4/c2/f4c2caa4e47b73a279b817ab2dc619092fc8f2d1.jpg?imwidth=2160",
        altText: "Relaxed Fit Padded Overshirt back view",
      },
      {
        url: "https://image.hm.com/assets/hm/68/cc/68cc760ee0d2265229bc43b6032c961f65bd1867.jpg?imwidth=2160",
        altText: "Relaxed Fit Padded Overshirt close-up view",
      },
      {
        url: "https://image.hm.com/assets/hm/bd/d6/bdd66dd4ddb439b96984dc79e72b22c4535ef8fd.jpg?imwidth=2160",
        altText: "Relaxed Fit Padded Overshirt worn by model",
      },
    ],

    rating: 4.7,

    numReviews: 24,
  },
  {
    name: "Relaxed Fit Printed Hoodie",

    description:
      "A relaxed-fit hoodie crafted from midweight cotton-blend sweatshirt fabric with a soft brushed interior for lasting comfort. Designed with a wrapover hood, dropped shoulders, long sleeves, a spacious kangaroo pocket, and ribbed cuffs and hem. Finished with a bold front print, making it ideal for casual everyday wear and cooler weather.",

    price: 2799.0,
    discountPrice: 2399.0,

    countInStock: 22,

    sku: "HD-PRT-008",

    category: "Topwear",

    brand: "Urban Threads",

    sizes: ["S", "M", "L", "XL"],

    colors: ["Dark Brown", "Black", "White"],

    collectionName: "Winter Essentials",

    material: "Cotton Blend",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/83/94/8394d95ef64f241d154c3bddfbb2471f6545f1ac.jpg?imwidth=2160",
        altText: "Relaxed Fit Printed Hoodie front view",
      },
      {
        url: "https://image.hm.com/assets/hm/c4/16/c416e2f98086f725f9ea73f40fdeb686fc026bc8.jpg?imwidth=2160",
        altText: "Relaxed Fit Printed Hoodie back view",
      },
      {
        url: "https://image.hm.com/assets/hm/62/0c/620c168da851abe88d84dff0363e635fc3204885.jpg?imwidth=2160",
        altText: "Relaxed Fit Printed Hoodie side view",
      },
      {
        url: "https://image.hm.com/assets/hm/34/47/344730770fb781e6247c859ab5f27cf09e45fff4.jpg?imwidth=2160",
        altText: "Relaxed Fit Printed Hoodie model wearing hoodie",
      },
      {
        url: "https://image.hm.com/assets/hm/6b/df/6bdf19fe199c181c0b5e1439ff0bf181ea6a99fb.jpg?imwidth=2160",
        altText: "Relaxed Fit Printed Hoodie model wearing hoodie 2",
      },
      {
        url: "https://image.hm.com/assets/hm/bf/d6/bfd6cede0f2466538aba235923e38d9d32ffcd0f.jpg?imwidth=2160",
        altText: "Relaxed Fit Printed Hoodie model wearing hoodie 3",
      },
    ],

    rating: 4.8,

    numReviews: 31,
  },
  {
    name: "Baggy Jeans",

    description:
      "Classic 5-pocket baggy jeans crafted from rigid 100% cotton denim for an authentic vintage-inspired look. Designed with a regular waist, dropped crotch, zip fly, and a relaxed baggy fit from the seat to the hem. The wide-leg silhouette stacks naturally at the ankle, making it perfect for casual streetwear and everyday outfits.",

    price: 2999.0,
    discountPrice: 2499.0,

    countInStock: 28,

    sku: "BGY-JNS-010",

    category: "Bottomwear",

    brand: "Urban Threads",

    sizes: ["28", "30", "32", "34", "36"],

    colors: ["Dark Blue"],

    collectionName: "Streetwear",

    material: "100% Cotton Denim",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/ba/bc/babc8443d086dc60cf7873c47ac3e672f2c8e87f.jpg?imwidth=2160",
        altText: "Baggy Jeans front view",
      },
      {
        url: "https://image.hm.com/assets/hm/95/44/9544b067496dc73ab6bd1aed691c3f04955cf4e8.jpg?imwidth=2160",
        altText: "Baggy Jeans back view",
      },
    ],

    rating: 4.7,

    numReviews: 31,
  },
  {
    name: "Relaxed Fit Cotton Cargo Trousers",

    description:
      "Relaxed fit cargo trousers crafted from soft cotton canvas for a comfortable everyday style. Designed with a concealed drawstring waist, zip fly with press-stud fastening, diagonal side pockets, flap back pockets, and practical flap leg pockets. Sewn-in knee pleats add structure and enhance the casual utility-inspired look. A versatile piece perfect for streetwear and casual outfits.",

    price: 2999.0,

    discountPrice: 2499.0,

    countInStock: 30,

    sku: "CRG-TRS-011",

    category: "Bottomwear",

    brand: "Urban Threads",

    sizes: ["28", "30", "34", "36"],

    colors: ["Black", "Beige"],

    collectionName: "Summer Essentials",

    material: "100% Cotton Canvas",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/bb/61/bb61a104c3238de624f0ffafd705a6fa21454cea.jpg?imwidth=2160",
        altText: "Relaxed Fit Cotton Cargo Trousers front view",
      },
      {
        url: "https://image.hm.com/assets/hm/0a/61/0a61a5a6e55ff7459022d80ad55a24f18a382d65.jpg?imwidth=2160",
        altText: "Relaxed Fit Cotton Cargo Trousers back view",
      },
      {
        url: "https://image.hm.com/assets/hm/a9/c8/a9c89bc015210584d24afcb377b768310a7db7bd.jpg?imwidth=2160",
        altText: "Relaxed Fit Cargo Trousers side pocket detail 2",
      },
      {
        url: "https://image.hm.com/assets/hm/e5/e5/e5e570ce54ad54dcd1477e01c249792d72113e71.jpg?imwidth=2160",
        altText: "Relaxed Fit Cotton Cargo Trousers full outfit view 3",
      },
    ],

    rating: 4.6,

    numReviews: 24,
  },
  {
    name: "Oversized Fit Printed Sweatshirt",

    description:
      "Oversized sweatshirt crafted from 100% cotton French terry fabric with a printed graphic motif for a modern streetwear look. Designed with a rib-trimmed round neckline, dropped shoulders, long sleeves, and wide ribbing at the cuffs and hem. The extra-loose silhouette provides a relaxed and comfortable fit, making it ideal for casual everyday outfits.",

    price: 2499.0,

    discountPrice: 1999.0,

    countInStock: 35,

    sku: "OVS-SWT-012",

    category: "Topwear",

    brand: "Urban Threads",

    sizes: ["M", "L", "XL", "XXL"],

    colors: ["Light Blue", "Burgundy", "Dark Brown"],

    collectionName: "Streetwear",

    material: "100% Cotton French Terry",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/64/20/6420fa5f1b09d00cd6a806961834bcfca4344e45.jpg?imwidth=2160",
        altText: "Oversized Printed Sweatshirt styled outfit view",
      },
      {
        url: "https://image.hm.com/assets/hm/58/7c/587cb751c8c034a917d5f6b4161c4dc2465e3b0e.jpg?imwidth=2160",
        altText: "Oversized Printed Sweatshirt front view",
      },
      {
        url: "https://image.hm.com/assets/hm/3c/aa/3caa1b00c8d948ab70b60fd1c2916df764cfa0f7.jpg?imwidth=2160",
        altText: "Oversized Printed Sweatshirt back view",
      },
      {
        url: "https://image.hm.com/assets/hm/1a/ae/1aae703bcedd8a9d89267224e9b07849f8123e64.jpg?imwidth=2160",
        altText: "Oversized Printed Sweatshirt graphic detail",
      },
    ],

    rating: 4.7,

    numReviews: 28,
  },
  {
    name: "Relaxed Fit Cotton Chinos",

    description:
      "Relaxed fit chinos crafted from soft cotton twill fabric for a clean yet comfortable everyday style. Designed with a zip fly and button closure, diagonal side pockets, welt back pockets, and straight-cut legs. The relaxed silhouette offers a modern casual fit without feeling oversized, making it perfect for smart casual and everyday outfits.",

    price: 2799.0,

    discountPrice: 2299.0,

    countInStock: 30,

    sku: "CHN-RLX-013",

    category: "Bottomwear",

    brand: "Modern Fit",

    sizes: ["28", "30", "32", "34", "36"],

    colors: ["White", "Black"],

    collectionName: "Smart Casual",

    material: "100% Cotton Twill",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/9a/c9/9ac90ea8a717151af20758cb5d2a9ae2d623e048.jpg?imwidth=2160",
        altText: "Relaxed Fit Cotton Chinos front view",
      },
      {
        url: "https://image.hm.com/assets/hm/0c/ab/0cab88a6dfd4e51841fc93b9dc376b2cb10c153e.jpg?imwidth=2160",
        altText: "Relaxed Fit Cotton Chinos back view",
      },
      {
        url: "https://image.hm.com/assets/hm/3f/f7/3ff786c6b4b1388319dd3596ba19f2f45140cfc0.jpg?imwidth=2160",
        altText: "Cotton Chinos pocket detail view",
      },
      {
        url: "https://image.hm.com/assets/hm/17/a8/17a8d8c805053dc9a65d42a28e5cb10d0e8d5bca.jpg?imwidth=2160",
        altText: "Relaxed Fit Chinos styled outfit view",
      },
      {
        url: "https://image.hm.com/assets/hm/3e/6b/3e6b3b3c1c5e82906525f48ee8e9155cb1df93e8.jpg?imwidth=2160",
        altText: "Relaxed Fit Chinos styled outfit view",
      },
    ],

    rating: 4.5,

    numReviews: 18,
  },
  {
    name: "Loose Fit Wide tailored trousers",

    description:
      "Tailored trousers crafted from premium twill fabric with a modern wide-leg silhouette. Featuring a concealed button and hook-and-bar fastening with a zip fly, diagonal side pockets, and welt back pockets. Designed with front pleats for a structured look while maintaining a relaxed and comfortable fit. Perfect for smart casual and contemporary everyday styling.",

    price: 3299.0,

    discountPrice: 2799.0,

    countInStock: 25,

    sku: "WLT-TRS-014",

    category: "Bottomwear",

    brand: "Modern Fit",

    sizes: ["28", "30", "32", "34", "36"],

    colors: ["Black"],

    collectionName: "Modern Essentials",

    material: "Twill (65% Polyester, 35% Viscose)",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/83/25/8325a92d15cf34945ba1a8e72ed874936f9dad3d.jpg?imwidth=2160",
        altText: "Wide Leg Tailored Trousers front view",
      },
      {
        url: "https://image.hm.com/assets/hm/af/3f/af3f2acf163e2f8cc7c8985c03e2b92969fcc526.jpg?imwidth=2160",
        altText: "Wide Leg Tailored Trousers back view",
      },
      {
        url: "https://image.hm.com/assets/hm/26/69/2669f2cdff7a87369b26022afab00a62bf787f87.jpg?imwidth=2160",
        altText: "Tailored Trousers pleat and pocket detail",
      },
      {
        url: "https://image.hm.com/assets/hm/db/14/db1471a489a61ec174bb05745f8aa4f5e92a4d9f.jpg?imwidth=2160",
        altText: "Wide Leg Trousers styled outfit view",
      },
    ],

    rating: 4.7,

    numReviews: 22,
  },
  {
    name: "Relaxed Fit Denim Jacket",

    description:
      "A timeless denim jacket crafted from rigid cotton denim with a relaxed modern silhouette. Designed with a classic collar, front zip closure, zipped chest pocket, jetted front pockets, and an inner pocket with concealed press-stud fastening. Featuring dropped shoulders and a straight-cut hem for a comfortable casual fit. A versatile layering piece that works perfectly with everyday outfits.",

    price: 3499.0,

    discountPrice: 2999.0,

    countInStock: 20,

    sku: "DEN-JKT-015",

    category: "Topwear",

    brand: "Modern Fit",

    sizes: ["XL", "S", "M", "L", "XXL"],

    colors: ["Grey"],

    collectionName: "Modern Essentials",

    material: "100% Cotton Denim",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/ef/ec/efecebc63980a3e5afc58a2f8af4a4f59c943b46.jpg?imwidth=2160",
        altText: "Relaxed Fit Denim Jacket front view",
      },
      {
        url: "https://image.hm.com/assets/hm/7c/c1/7cc14e41213e71ed74898b6c0a19d6bd33a36ed6.jpg?imwidth=2160",
        altText: "Relaxed Fit Denim Jacket back view",
      },
      {
        url: "https://image.hm.com/assets/hm/d6/b3/d6b3cf7d76637d1881f293bfc599d24e4c434582.jpg?imwidth=2160",
        altText: "Denim Jacket pocket and zip detail",
      },
      {
        url: "https://image.hm.com/assets/hm/6f/f0/6ff08580875922f0b069f70a065ca23d54632c72.jpg?imwidth=2160",
        altText: "Denim Jacket styled outfit view",
      },
    ],

    rating: 4.6,

    numReviews: 19,
  },
  {
    name: "Lightly Padded Nylon Bomber Jacket",

    description:
      "A modern bomber jacket crafted from lightweight nylon with a lightly padded design for extra comfort and warmth. Features a ribbed stand collar, front zip closure, diagonal welt pockets with press-stud fastening, a zipped sleeve pocket, and inner pockets for practical storage. Finished with ribbed cuffs and hem for a classic bomber silhouette. A versatile outer layer designed for contemporary streetwear and casual styling.",

    price: 2999.0,

    discountPrice: 2399.0,

    countInStock: 20,

    sku: "NYL-BMB-016",

    category: "Topwear",

    brand: "Modern Fit",

    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: ["Olive Green", "Beige"],

    collectionName: "Urban Streetwear",

    material: "Nylon Shell with Polyester Padding",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/91/fd/91fd307e8fe6e77d80097dc9d56a47bc9d409561.jpg?imwidth=2160",
        altText: "Lightly Padded Nylon Bomber Jacket front view",
      },
      {
        url: "https://image.hm.com/assets/hm/60/7a/607ae777a95c83200daf348b597d652bb48e60d5.jpg?imwidth=2160",
        altText: "Nylon Bomber Jacket back view",
      },
      {
        url: "https://image.hm.com/assets/hm/d8/22/d822a87c60b81aeab6ec7f96e080280907a90494.jpg?imwidth=2160",
        altText: "Bomber Jacket sleeve pocket detail",
      },
      {
        url: "https://image.hm.com/assets/hm/1a/de/1ade9eeb7f38900bd39b52411a9701c1b7870306.jpg?imwidth=2160",
        altText: "Padded Bomber Jacket styled outfit view",
      },
      {
        url: "https://image.hm.com/assets/hm/e2/a4/e2a4c45def96b2bbe5b1a730c919ac5d00fe8ae0.jpg?imwidth=2160",
        altText: "Padded Bomber Jacket styled outfit view",
      },
    ],

    rating: 4.7,

    numReviews: 24,
  },
  {
    name: "Men Cotton Muslin Resort Collar Shirt",

    description:
      "A relaxed short-sleeved shirt crafted from 100% cotton muslin with a soft washed finish for a casual and comfortable feel. Designed with a resort collar, French front detailing, a back yoke, and a straight-cut hem. The relaxed fit creates an effortless silhouette that is comfortable for everyday wear while maintaining a refined casual look.",

    price: 2499.0,

    discountPrice: 1999.0,

    countInStock: 35,

    sku: "MEN-SHR-003",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: ["Blue"],

    collectionName: "Summer Essentials",

    material: "Cotton 100%",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/07/d5/07d502d272483ebc112740d6bf130b6b3abed3c9.jpg?imwidth=2160",
        altText: "Men Cotton Muslin Resort Collar Shirt Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/7d/60/7d60f1c13ffb1236fef1cbed6e091754d33c28bc.jpg?imwidth=2160",
        altText: "Men Cotton Muslin Resort Collar Shirt Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/d5/bf/d5bf7ccdb268478bd5de54cdb2cf581557921ad1.jpg?imwidth=2160",
        altText: "Men Cotton Muslin Resort Collar Shirt Detail View",
      },
    ],

    isFeatured: true,

    rating: 4.7,

    numReviews: 32,
  },
  {
    name: "Men Boxy Scuba Zip Hoodie",

    description:
      "A contemporary boxy-style zip-through hoodie crafted from premium scuba fabric for a structured yet comfortable feel. Features a lined drawstring hood, front zip closure, dropped shoulders, and open front pockets for everyday functionality. The loose fit creates a relaxed silhouette that offers comfort without feeling oversized, making it a versatile layering piece.",

    price: 3499.0,

    discountPrice: 2999.0,

    countInStock: 30,

    sku: "MEN-HOD-002",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: ["Black", "Grey"],

    collectionName: "Urban Essentials Collection",

    material: "Polyester 70%, Viscose 24%, Elastane 6%",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/c6/40/c6405e56dc9ceb362a57a70df1c52ba78c5d3035.jpg?imwidth=2160",
        altText: "Men Boxy Scuba Zip Hoodie Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/66/74/6674f9b43f21b78330425ea6cb5ecd1896035d34.jpg?imwidth=2160",
        altText: "Men Boxy Scuba Zip Hoodie Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/24/ea/24eaa20a446de62cef7bef9b3eb0bf843b0b4850.jpg?imwidth=2160",
        altText: "Men Boxy Scuba Zip Hoodie Detail View",
      },
      {
        url: "https://image.hm.com/assets/hm/18/6a/186aa773267bcde63103fe1b85d545b3d34934fe.jpg?imwidth=2160",
        altText: "Men Boxy Scuba Zip Hoodie Detail View",
      },
    ],

    isFeatured: true,

    rating: 4.6,

    numReviews: 21,
  },

  // --------- //
  {
    name: "Oversized Cotton Top",
    description:
      "A relaxed oversized top crafted from soft cotton jersey for everyday comfort. Designed with a round rib-trimmed neckline and elbow-length batwing sleeves, this minimal silhouette creates an effortless casual look. Perfect for pairing with jeans, trousers, or layered outfits.",

    price: 1599.0,
    discountPrice: 1299.0,

    countInStock: 30,

    sku: "OVR-TOP-W-001",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Off White", "White", "Yellow"],

    collectionName: "Casual Essentials",

    material: "Cotton Jersey",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/e6/23/e623eb011794dfeea23330d9d20711190c6a70e1.jpg?imwidth=2160",
        altText: "Oversized Cotton Top Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/22/6b/226b3d963adee47cc9c4139a4fa4958967c0ecb4.jpg?imwidth=2160",
        altText: "Oversized Cotton Top Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/d8/f7/d8f7016da70a17e11a94e7e2205fce27f1a01901.jpg?imwidth=2160",
        altText: "Oversized Cotton Top Back View",
      },
    ],

    rating: 4.6,
    numReviews: 18,
  },
  {
    name: "Relaxed Fit Linen Shirt",

    description:
      "A lightweight relaxed-fit shirt crafted from an airy linen and viscose blend. Featuring a classic collar, button-down front, open chest pocket, and long sleeves with buttoned cuffs. The curved hem and box pleat at the back create an effortless silhouette, making it perfect for casual days, vacations, and elevated everyday outfits.",

    price: 2499.0,

    discountPrice: 1999.0,

    countInStock: 25,

    sku: "LIN-SH-W-002",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Light purple", "Pink"],

    collectionName: "Summer Essentials",

    material: "Linen Blend",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/7c/b5/7cb585834703b0903a307bbbfc792cee80b13dc7.jpg?imwidth=2160",
        altText: "Relaxed Fit Linen-blend Shirt Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/84/2e/842e796214081bb8eed6bf51756ad87c1ae0bec6.jpg?imwidth=2160",
        altText: "Relaxed Fit Linen-blend Shirt Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/3c/24/3c24b67ac55b6461b5ff57474c805995d0cacfd2.jpg?imwidth=2160",
        altText: "Relaxed Fit Linen-blend Shirt Side Detail View",
      },
      {
        url: "https://image.hm.com/assets/hm/ae/8c/ae8cd09b4a3fd396f161cb62674d6e81ad278c50.jpg?imwidth=2160",
        altText: "Relaxed Fit Linen-blend Shirt Side Detail View",
      },
    ],

    rating: 4.7,

    numReviews: 22,
  },
  {
    name: "Kids Printed Hoodie",

    description:
      "A cozy hoodie crafted from soft cotton-blend sweatshirt fabric with a brushed inner finish for extra comfort. Designed with a lined wrapover hood, dropped shoulders, kangaroo pocket, and ribbed trims at the cuffs and hem. A comfortable everyday layer perfect for school, playtime, and casual outings.",

    price: 1699.0,

    discountPrice: 1399.0,

    countInStock: 35,

    sku: "KID-HOOD-002",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["4-6 Years", "6-8 Years", "8-10 Years", "10-12 Years"],

    colors: ["Dark purple", "Light Grey", "Cream"],

    collectionName: "Kids Collection",

    material: "Cotton Blend Sweatshirt",

    gender: "Kids",

    images: [
      {
        url: "https://image.hm.com/assets/hm/65/d2/65d20279c6ea0fe91b940b36e6acedbf628d1631.jpg?imwidth=2160",
        altText: "Kids Printed Hoodie Detail View",
      },
      {
        url: "https://image.hm.com/assets/hm/9c/cb/9ccbc6c2953d7163452daa834ccc6361753f8378.jpg?imwidth=2160",
        altText: "Kids Printed Hoodie Detail View",
      },
      {
        url: "https://image.hm.com/assets/hm/65/c9/65c9a2bd7c8c738cb6c97e5f9adc183ff870e0e5.jpg?imwidth=2160",
        altText: "Kids Printed Hoodie Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/98/ae/98ae73e6218ee5fe289c8bdb8c673915a2421d71.jpg?imwidth=2160",
        altText: "Kids Printed Hoodie Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/6c/88/6c88cd9031041d0b6be86aeb5fb93607c91f23c6.jpg?imwidth=2160",
        altText: "Kids Printed Hoodie Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/d4/95/d495d0606efaa43bc29b9fbff62ef165d8cf95a3.jpg?imwidth=2160",
        altText: "Kids Printed Hoodie Back View",
      },
    ],

    isFeatured: true,
    rating: 4.8,

    numReviews: 32,
  },
  {
    name: "Wide High Waist Jeans",

    description:
      "A timeless pair of wide-leg jeans crafted from comfortable cotton denim with a slight stretch for ease of movement. Designed with a high waist, classic five-pocket styling, zip fly and button closure. The wide silhouette creates a relaxed yet polished look, perfect for everyday casual outfits.",

    price: 2999.0,

    discountPrice: 2499.0,

    countInStock: 30,

    sku: "WIDE-JNS-W-003",

    category: "Bottomwear",

    brand: "Modern Essentials",

    sizes: ["26", "28", "30", "32", "34"],

    colors: ["Dark Blue Denim", "Light Blue Denim", "Dark Brown"],

    collectionName: "Denim Essentials",

    material: "Cotton Denim",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/6d/47/6d47d9455cf940890341be26304783318b3a5ba1.jpg?imwidth=2160",
        altText: "Wide High Waist Jeans Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/1a/31/1a319db52a497aa2fda73a063d5ad293b340e95b.jpg?imwidth=2160",
        altText: "Wide High Waist Jeans Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/18/c0/18c0b4279ed13c67a19349e2f1a289efce60db89.jpg?imwidth=2160",
        altText: "Wide High Waist Jeans Full Length View",
      },
      {
        url: "https://image.hm.com/assets/hm/d7/28/d7288a2b394851930a9a4e204bd1db89fa19f515.jpg?imwidth=2160",
        altText: "Wide High Waist Jeans Full Length View",
      },
      {
        url: "https://image.hm.com/assets/hm/fd/28/fd2875286bd2e6186945b5cd77f9e25b46e7f5ea.jpg?imwidth=2160",
        altText: "Wide High Waist Jeans Full Length View",
      },
      {
        url: "https://image.hm.com/assets/hm/4a/85/4a85b97184b8c63903d9c646a10a995c398bd818.jpg?imwidth=2160",
        altText: "Wide High Waist Jeans Full Length View",
      },
    ],

    rating: 4.8,

    numReviews: 26,
  },
  {
    name: "Relaxed Fit Hoodie",

    description:
      "A relaxed-fit hoodie crafted from soft cotton-blend sweatshirt fabric with a brushed interior for added warmth and comfort. Designed with a double-layered hood, dropped shoulders, a spacious kangaroo pocket, and ribbed trims at the cuffs and hem. A versatile everyday essential for casual layering and off-duty looks.",

    price: 2499.0,

    discountPrice: 1999.0,

    countInStock: 35,

    sku: "HD-W-004",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Brown", "Light Yellow"],

    collectionName: "Casual Essentials",

    material: "Cotton Blend Sweatshirt",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/01/f6/01f6b898e5d15addf2059cb5c232ae025ba479c7.jpg?imwidth=2160",
        altText: "Relaxed Fit Hoodie Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/e1/a8/e1a86a9b23d4231b4fa7f81f2f293df49c999e0e.jpg?imwidth=2160",
        altText: "Relaxed Fit Hoodie Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/9f/f9/9ff90c2c46841952f04d339046a52eb678a9df61.jpg?imwidth=2160",
        altText: "Relaxed Fit Hoodie Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/30/fb/30fb91d1c66252c72f968633f4ab581ef15c6206.jpg?imwidth=2160",
        altText: "Relaxed Fit Hoodie Detail View",
      },
      {
        url: "https://image.hm.com/assets/hm/f2/e1/f2e10ea13a56067f4166d3889c614483c3272cb9.jpg?imwidth=2160",
        altText: "Relaxed Fit Hoodie Detail View",
      },
      {
        url: "https://image.hm.com/assets/hm/ef/fd/effdb3c0dab3e6cfd40d5a7181d54d4d59fcde54.jpg?imwidth=2160",
        altText: "Relaxed Fit Hoodie Detail View",
      },
    ],

    rating: 4.7,

    numReviews: 21,
  },
  {
    name: "Oversized Printed Sweatshirt",

    description:
      "An oversized sweatshirt crafted from a soft cotton-blend fabric with a brushed interior for lasting comfort. Designed with bold printed motifs on the front and back, a classic rib-trimmed crew neckline, dropped shoulders, and long sleeves. Finished with ribbed cuffs and hem for a relaxed, street-inspired silhouette that's perfect for everyday wear.",

    price: 2699.0,

    discountPrice: 2199.0,

    countInStock: 30,

    sku: "SWT-W-005",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Black-Green", "Black-Red"],

    collectionName: "Casual Essentials",

    material: "Cotton Blend Sweatshirt",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/af/23/af238497fd6ec1463b51186fa9e200d04775f21b.jpg?imwidth=2160",
        altText: "Oversized Printed Sweatshirt Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/b3/44/b344e07a619a450fb6fbd2e8d1a80b4e08dea1b9.jpg?imwidth=2160",
        altText: "Oversized Printed Sweatshirt Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/a8/a6/a8a6086ee6314c26930c23a490d07da7dba43903.jpg?imwidth=2160",
        altText: "Oversized Printed Sweatshirt Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/1f/25/1f2589b0b1ea14665e1af9e97fabb0240e770ae3.jpg?imwidth=2160",
        altText: "Oversized Printed Sweatshirt Print Detail",
      },
      {
        url: "https://image.hm.com/assets/hm/45/c4/45c4a001a89a3442f58155442717fa8d38974923.jpg?imwidth=2160",
        altText: "Oversized Printed Sweatshirt Print Detail",
      },
    ],

    rating: 4.8,

    numReviews: 29,
  },
  {
    name: "Pointelle-knit Polo Shirt",

    description:
      "A fitted polo shirt crafted from supersoft pointelle-knit viscose for a lightweight, breathable feel. Designed with a classic pointed collar featuring an embroidered text motif, a button placket, and a patch chest pocket. Finished with short sleeves and ribbed trims at the pocket, cuffs, and hem, making it a refined everyday essential with a feminine touch.",

    price: 2299.0,

    discountPrice: 1799.0,

    countInStock: 28,

    sku: "POL-W-006",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["White"],

    collectionName: "Soft Knit Collection",

    material: "Pointelle-knit Viscose",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/25/b4/25b4ccf76b3dce8f6734c34ff770dc93c0802523.jpg?imwidth=2160",
        altText: "Pointelle-knit Polo Shirt Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/21/13/2113a01fbf2bff4d05a82fde7306f8b644206964.jpg?imwidth=2160",
        altText: "Pointelle-knit Polo Shirt Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/02/52/025247a092be70c16dfd2a0c90f8820af6718474.jpg?imwidth=2160",
        altText: "Pointelle-knit Polo Shirt Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/50/e4/50e42763a558cbeccfacf139b5000d5783ff9ae0.jpg?imwidth=2160",
        altText: "Pointelle-knit Polo Shirt Detail View",
      },
    ],

    rating: 4.7,

    numReviews: 24,
  },
  {
    name: "Loose-fit Linen-blend Trousers",

    description:
      "Elegant loose-fit trousers crafted from a breathable linen, cotton, and viscose blend. Designed with a flattering high waist, concealed hook-and-bar fastening, zip fly, and wide legs finished with pressed front and back creases. Complete with diagonal front pockets and a soft cotton lining for all-day comfort, making them perfect for both smart and casual styling.",

    price: 2999.0,

    discountPrice: 2399.0,

    countInStock: 26,

    sku: "LIN-TRS-W-007",

    category: "Bottomwear",

    brand: "Modern Essentials",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Light turquoise", "Light Beige"],

    collectionName: "Linen Essentials",

    material: "Linen Blend",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/d4/ef/d4efe490083ff7b8a604aa97daac378d8b4dec7e.jpg?imwidth=2160",
        altText: "Loose-fit Linen-blend Trousers Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/08/46/0846d64666d55a8f314ca9a290d482c8098c6f56.jpg?imwidth=2160",
        altText: "Loose-fit Linen-blend Trousers Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/d2/75/d275280036064027d1c876e5a09fdb81a5cc2678.jpg?imwidth=2160",
        altText: "Loose-fit Linen-blend Trousers Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/4f/26/4f260ee40923ce9312e2551be4627981e5225bab.jpg?imwidth=2160",
        altText: "Loose-fit Linen-blend Trousers Detail View",
      },
      {
        url: "https://image.hm.com/assets/hm/f0/85/f0859be51ba9fd53c1e307409159e0c65c97fc1a.jpg?imwidth=2160",
        altText: "Loose-fit Linen-blend Trousers Detail View",
      },
    ],

    rating: 4.7,

    numReviews: 21,
  },
  {
    name: "Oversized Denim Jacket",

    description:
      "A modern oversized jacket crafted from durable cotton denim with a relaxed boxy silhouette. Designed with a classic collar, full zip fastening, dropped shoulders, and a back yoke for a timeless look. Finished with welt front pockets, buttoned cuffs, and concealed elastic at the hem, making it an effortless layering piece for every season.",

    price: 3499.0,

    discountPrice: 2899.0,

    countInStock: 22,

    sku: "DEN-JKT-W-008",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Denim Blue", "Dark denim grey"],

    collectionName: "Denim Essentials",

    material: "Cotton Denim",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/9d/bd/9dbd88979056d65415def1ae98dd7afa0462fa37.jpg?imwidth=2160",
        altText: "Oversized Denim Jacket Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/d1/ee/d1eec066852ff469c064d6003cace6628884af42.jpg?imwidth=2160",
        altText: "Oversized Denim Jacket Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/02/0c/020c2489f6c927df92aee80e2e13c460f9602162.jpg?imwidth=2160",
        altText: "Oversized Denim Jacket Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/aa/a2/aaa2110ddf99210335464dd8f7958c7e385664da.jpg?imwidth=2160",
        altText: "Oversized Denim Jacket Detail View",
      },
      {
        url: "https://image.hm.com/assets/hm/37/10/371015ba07606d5a6df539c9b3845e0a7978cb2f.jpg?imwidth=2160",
        altText: "Oversized Denim Jacket Detail View",
      },
    ],

    rating: 4.8,

    numReviews: 29,
  },
  {
    name: "Lightly Padded Bomber Jacket",

    description:
      "A modern bomber jacket crafted from durable woven fabric with light padding for everyday warmth and comfort. Designed with a classic collar, full-length zip fastening, and welt side pockets for a clean, versatile look. Adjustable elastic drawstrings at the cuffs and hem allow for a customizable fit, while the smooth lining ensures effortless layering throughout the season.",

    price: 3999.0,

    discountPrice: 3299.0,

    countInStock: 20,

    sku: "BMB-W-010",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Light Beige"],

    collectionName: "Winter Essentials",

    material: "Cotton Blend",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/4e/75/4e75e807a3fc71a3435e4e89b6066c1c74e83ae2.jpg?imwidth=2160",
        altText: "Lightly Padded Bomber Jacket Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/66/92/6692d2be0dc08813194edc5e7ae3f5c933ffa36b.jpg?imwidth=2160",
        altText: "Lightly Padded Bomber Jacket Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/6f/16/6f16d0ee4cdb21b0b37e5d6ca84a51d05bb8b989.jpg?imwidth=2160",
        altText: "Lightly Padded Bomber Jacket Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/fb/a9/fba9b521eb5c9c1ccf8bb2282c75a1676d7148b5.jpg?imwidth=2160",
        altText: "Lightly Padded Bomber Jacket Detail View",
      },
    ],

    rating: 4.8,

    numReviews: 23,
  },
  {
    name: "Barrel-leg Cargo Trousers",

    description:
      "Contemporary cargo trousers crafted from durable cotton-blend twill with a structured yet comfortable feel. Designed with a flattering high waist, zip fly with button fastening, and a removable narrow tie belt. Featuring utility-inspired patch side pockets, visible front and back seam detailing, and modern barrel legs finished with darts at the hems for a relaxed, fashion-forward silhouette.",

    price: 3199.0,

    discountPrice: 2599.0,

    countInStock: 24,

    sku: "CRG-W-011",

    category: "Bottomwear",

    brand: "Modern Essentials",

    sizes: ["XS", "S", "M", "L"],

    colors: ["Dark Brown", "Khaki Green"],

    collectionName: "Casual Essentials",

    material: "Cotton Blend Twill",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/db/d7/dbd743dfac5d65c3e4364c1ee73f5655715653bd.jpg?imwidth=2160",
        altText: "Barrel-leg Cargo Trousers Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/99/28/99282e03364334bc8a728e702782caadb63c522e.jpg?imwidth=2160",
        altText: "Barrel-leg Cargo Trousers Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/f2/45/f2453869064152a7f9124dc1f6684d59afb50f55.jpg?imwidth=2160",
        altText: "Barrel-leg Cargo Trousers Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/2e/97/2e9781ce2cf1a1f2fe58632408589fc379e1626b.jpg?imwidth=2160",
        altText: "Barrel-leg Cargo Trousers Detail View",
      },
      {
        url: "https://image.hm.com/assets/hm/74/ec/74ec5cc1caa65d8d7131a5ca78fd953ab429c634.jpg?imwidth=2160",
        altText: "Barrel-leg Cargo Trousers Detail View",
      },
    ],

    rating: 4.7,

    numReviews: 20,
  },
  {
    name: "Oversized Blazer",

    description:
      "A contemporary oversized blazer tailored from premium woven fabric for a structured yet effortless look. Designed with an open front, classic notched lapels, jetted flap pockets, and lightly padded shoulders for a refined silhouette. Finished with cuff slits and a smooth full lining, making it the perfect layering piece for both workwear and elevated casual styling.",

    price: 4299.0,

    discountPrice: 3499.0,

    countInStock: 18,

    sku: "BLZ-W-012",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["XS", "M", "L", "XL"],

    colors: ["Cream"],

    collectionName: "Modern Tailoring",

    material: "Woven Polyester Blend",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/e7/e9/e7e9d9c5db02666ce1a2d45e3784e8e98600ed75.jpg?imwidth=2160",
        altText: "Oversized Blazer Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/fc/a5/fca5f1ccf878886969d0e8585ac5575c4f49c505.jpg?imwidth=2160",
        altText: "Oversized Blazer Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/15/8d/158d4820c1e83ff588863d0c9ddf48e5e8abffda.jpg?imwidth=2160",
        altText: "Oversized Blazer Side View",
      },
    ],
    isFeatured: true,
    rating: 4.8,

    numReviews: 17,
  },
  {
    name: "RelaxedFit Layered Shirt",

    description:
      "A relaxed-fit layered shirt designed with a timeless checked pattern for a casual, street-inspired look. Crafted from soft woven fabric, it features a classic collar, button-front closure, long sleeves with adjustable cuffs, and a curved hem. The loose silhouette makes it ideal for layering over a T-shirt or wearing on its own throughout the year.",

    price: 2799.0,
    discountPrice: 2399.0,

    countInStock: 20,

    sku: "LY-SH-006",

    category: "Topwear",

    brand: "Urban Threads",

    sizes: ["S", "M", "L", "XL"],

    colors: ["Dark Red", "Grey"],

    collectionName: "Casual Essentials",

    material: "Cotton Blend",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/d6/3b/d63bd058ce55288749160e433296e099ca7c78a1.jpg?imwidth=2160",
        altText: "Relaxed Fit Layered Shirt front view",
      },
      {
        url: "https://image.hm.com/assets/hm/7a/1a/7a1a3f25d31db420b6044d911e82f076cba8e3f9.jpg?imwidth=2160",
        altText: "Relaxed Fit Layered Shirt back view",
      },
      {
        url: "https://image.hm.com/assets/hm/a8/df/a8df8e035016b30d669383f625b2daae6b0a34e4.jpg?imwidth=2160",
        altText: "Relaxed Fit Layered Shirt side view",
      },
      {
        url: "https://image.hm.com/assets/hm/e5/f2/e5f271f3e48f48796e2aa94d45c3f51271275367.jpg?imwidth=2160",
        altText: "Relaxed Fit Layered Shirt worn by model",
      },
    ],
    isFeatured: true,

    rating: 4.6,
    numReviews: 16,
  },
  {
    name: "Oversized Printed T-shirt",

    description:
      "A casual oversized T-shirt crafted from soft cotton jersey for everyday comfort. Designed with a relaxed silhouette, dropped shoulders, and a classic ribbed crew neckline. Finished with a statement front print, making it an effortless choice for pairing with jeans, cargo trousers, or shorts for a laid-back streetwear-inspired look.",

    price: 1499.0,

    discountPrice: 1199.0,

    countInStock: 35,

    sku: "TSH-W-012",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["M", "L", "XL"],

    colors: ["Orange", "White"],

    collectionName: "Summer Essentials",

    material: "Cotton Jersey",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/6a/a1/6aa1ed73c9122e336eabdd6a45f8a3189f0e20e0.jpg?imwidth=2160",
        altText: "Oversized Printed T-shirt Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/68/4a/684ab5cf5853c61dd620ab7f71f666967a2849db.jpg?imwidth=2160",
        altText: "Oversized Printed T-shirt Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/23/ff/23ff815d1d2b0db8618b4effa38fb4640e214dbe.jpg?imwidth=2160",
        altText: "Oversized Printed T-shirt Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/04/7d/047df1ab9a200605ff4507afef40c73cb0d3c9f6.jpg?imwidth=2160",
        altText: "Oversized Printed T-shirt Detail View",
      },
    ],

    rating: 4.7,

    numReviews: 31,
  },
  {
    name: "Single-breasted Cotton Blazer",

    description:
      "A lightweight single-breasted blazer crafted from breathable cotton weave for effortless smart-casual styling. Designed with classic notch lapels, a button-front closure, and softly structured shoulder pads for a tailored silhouette. Finished with patch chest and front pockets, a removable tie belt to define the waist, and a single back vent for added comfort and ease of movement.",

    price: 3799.0,

    discountPrice: 3099.0,

    countInStock: 20,

    sku: "BLZ-W-013",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Denim Blue"],

    collectionName: "Modern Tailoring",

    material: "Cotton Weave",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/bc/49/bc49ef064107135dacaec331f4d5e0f27583d8b7.jpg?imwidth=2160",
        altText: "Single-breasted Cotton Blazer Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/c2/f8/c2f844ac749f5b6ec6014ae892e92acd1e153123.jpg?imwidth=2160",
        altText: "Single-breasted Cotton Blazer Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/79/b5/79b5fe7af47f354d691873a8ff57e04b290935b1.jpg?imwidth=2160",
        altText: "Single-breasted Cotton Blazer Side View",
      },
      {
        url: "IMAGE_URL_4",
        altText: "Single-breasted Cotton Blazer Detail View",
      },
    ],

    rating: 4.8,

    numReviews: 18,
  },
  {
    name: "Women Baggy Fit Rigid Denim Jeans",

    description:
      "A modern pair of 5-pocket jeans crafted from rigid cotton denim that feels structured at first and gradually softens with wear. Designed with a curved, voluminous leg, a regular fit through the hip and thigh, and a relaxed baggy fit from the thigh to the hem. Features a high waist, zip fly with button closure, and a regular length that sits neatly at the top of the foot with minimal stacking.",

    price: 3999.0,

    discountPrice: 3499.0,

    countInStock: 28,

    sku: "MEN-JNS-004",

    category: "Bottomwear",

    brand: "Modern Essentials",

    sizes: ["28", "30", "32", "34", "36", "38"],

    colors: ["Light Blue Denim", "Dark Blue Denim"],

    collectionName: "Denim Essentials",

    material: "Cotton Denim 100%",

    gender: "Women",

    images: [
      {
        url: "https://image.hm.com/assets/hm/cc/86/cc864540e495463dfbf580af9aa686bb48154ef1.jpg?imwidth=2160",
        altText: "Women Baggy Fit Rigid Denim Jeans Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/5f/69/5f69dc71769ba13ea745ef0bd6f7304791008446.jpg?imwidth=2160",
        altText: "Women Baggy Fit Rigid Denim Jeans Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/78/03/78036b3040abbe2f967891339540d9bc73764b56.jpg?imwidth=2160",
        altText: "Women Baggy Fit Rigid Denim Jeans Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/c4/3f/c43f92a3afc217b32530b116d14e01dbd8ae604a.jpg?imwidth=2160",
        altText: "Women Baggy Fit Rigid Denim Jeans Back View",
      },
    ],

    isFeatured: true,

    rating: 4.8,

    numReviews: 45,
  },
  {
    name: "Men Double-Breasted Twill Jacket",

    description:
      "A sophisticated double-breasted jacket crafted from soft twill fabric for a refined and comfortable fit. Designed with classic peak lapels, a chest pocket, flap front pockets, and three functional jetted inner pockets. Decorative cuff buttons and a double back vent add elegant tailoring details, while the regular fit ensures comfortable wear with a timeless silhouette. Fully lined for a premium finish.",

    price: 5999.0,

    discountPrice: 4999.0,

    countInStock: 20,

    sku: "MEN-JKT-001",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["S", "M", "L", "XL", "XXL"],

    colors: ["Black"],

    collectionName: "Premium Tailoring Collection",

    material: "Polyester 65%, Viscose 33%, Elastane 2%",

    gender: "Men",

    images: [
      {
        url: "https://image.hm.com/assets/hm/eb/0f/eb0f93e1ab07352512aa208dfcf41e20f3f65d6e.jpg?imwidth=2160",
        altText: "Men Double-Breasted Twill Jacket Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/46/08/460839733363d6c5a897108a32e10d7263ad5595.jpg?imwidth=2160",
        altText: "Men Double-Breasted Twill Jacket Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/2d/85/2d855087b106631d15fd3eac294da45173d98609.jpg?imwidth=2160",
        altText: "Men Double-Breasted Twill Jacket Detail View",
      },
      {
        url: "https://image.hm.com/assets/hm/22/6f/226f483ad4aaeb211fe2853a3555b4e70a55f970.jpg?imwidth=2160",
        altText: "Men Double-Breasted Twill Jacket Detail View",
      },
    ],

    isFeatured: true,

    rating: 4.7,

    numReviews: 24,
  },

  // -------- //
  {
    name: "Kids Loose Fit Printed T-shirt",

    description:
      "A comfortable loose-fit T-shirt crafted from soft cotton jersey with playful print motifs. Designed with a rib-trimmed round neckline and dropped shoulders for a relaxed everyday silhouette. Perfect for casual days, playtime, and easy layering.",

    price: 999.0,

    discountPrice: 799.0,

    countInStock: 40,

    sku: "KID-TSH-001",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: [
      "1.5-2 Years",
      "2-4 Years",
      "4-6 Years",
      "6-8 Years",
      "8-10 Years",
      "10-12 Years",
    ],

    colors: ["Light Red", "White", "Cream"],

    collectionName: "Kids Collection",

    material: "Cotton Jersey",

    gender: "Kids",

    images: [
      {
        url: "https://image.hm.com/assets/hm/ef/f5/eff566fbdeceadda4ce766126cb9ff9734498f99.jpg?imwidth=2160",
        altText: "Kids Loose Fit Printed T-shirt Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/1c/eb/1ceb2e2d29d5aa505fefc32a2376f9e49710b2d9.jpg?imwidth=2160",
        altText: "Kids Loose Fit Printed T-shirt Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/e1/6c/e16c457fe76ea3951c59f25f29296ee0f44fd5a4.jpg?imwidth=2160",
        altText: "Kids Loose Fit Printed T-shirt Detail View",
      },
      {
        url: "https://image.hm.com/assets/hm/c3/63/c363f284518cc0ddb2b3bbbca38a9cc25fa43732.jpg?imwidth=2160",
        altText: "Kids Loose Fit Printed T-shirt Detail View",
      },
      {
        url: "https://image.hm.com/assets/hm/ba/51/ba517a5ec90c57aec7471ff4b95b175c3d2d6b15.jpg?imwidth=2160",
        altText: "Kids Loose Fit Printed T-shirt Detail View",
      },
    ],

    rating: 4.7,

    numReviews: 24,
  },
  {
    name: "Kids Cotton Cargo Trousers",

    description:
      "Comfortable cargo trousers crafted from durable cotton twill for everyday adventures. Designed with an adjustable elasticated waistband for a secure fit, a zip fly with concealed press-stud fastening, diagonal front pockets, flap cargo pockets, and straight legs with utility-inspired seam detailing. Perfect for school, outdoor play, and casual wear.",

    price: 1799.0,

    discountPrice: 1499.0,

    countInStock: 35,

    sku: "KID-BTM-003",

    category: "Bottomwear",

    brand: "Modern Essentials",

    sizes: ["1.5-2 Years", "2-4 Years", "4-6 Years", "6-8 Years"],

    colors: ["Beige", "Light Sage Green"],

    collectionName: "Kids Collection",

    material: "Cotton Twill",

    gender: "Kids",

    images: [
      {
        url: "https://image.hm.com/assets/hm/20/4e/204e798a482d6c5a9a0f0796a2f8f71b8a70de3a.jpg?imwidth=2160",
        altText: "Kids Cotton Cargo Trousers Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/bd/b2/bdb2ffba3a68e53dfa4de0d4edfe1850425dacb4.jpg?imwidth=2160",
        altText: "Kids Cotton Cargo Trousers Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/dd/d6/ddd69f3f36c2c43e2dac3a8b38d36ea9bb789729.jpg?imwidth=2160",
        altText: "Kids Cotton Cargo Trousers Side View",
      },
      {
        url: "https://image.hm.com/assets/hm/84/07/8407a70914b97ec64a2e9b02c859ba2f17ff000c.jpg?imwidth=2160",
        altText: "Kids Cotton Cargo Trousers Side View",
      },
    ],

    rating: 4.8,

    numReviews: 21,
  },
  {
    name: "Kids Printed Denim Jacket",

    description:
      "A stylish denim jacket crafted from durable 100% cotton with an all-over print for a playful look. Designed with a classic collar, press-stud front fastening, long sleeves with buttoned cuffs, and functional patch front pockets. An embroidered text motif on the back and an inverted box pleat at the yoke add distinctive detailing, making it a perfect layering piece for everyday adventures.",

    price: 2499.0,

    discountPrice: 1999.0,

    countInStock: 25,

    sku: "KID-JKT-004",

    category: "Topwear",

    brand: "Modern Essentials",

    sizes: ["1.5-2 Years", "2-4 Years", "4-6 Years", "6-8 Years", "8-10 Years"],

    colors: ["Blue Denim"],

    collectionName: "Kids Collection",

    material: "Cotton Denim",

    gender: "Kids",

    images: [
      {
        url: "https://image.hm.com/assets/hm/eb/75/eb75962e094adf545a6c672fcbfde7a028d42837.jpg?imwidth=2160",
        altText: "Kids Printed Denim Jacket Front View",
      },
      {
        url: "https://image.hm.com/assets/hm/9d/ee/9deed0f8d2b289dd5e42a7cc940957b464042260.jpg?imwidth=2160",
        altText: "Kids Printed Denim Jacket Back View",
      },
      {
        url: "https://image.hm.com/assets/hm/68/62/68628f6e06166b643e31cbc081d474f1e28ec753.jpg?imwidth=2160",
        altText: "Kids Printed Denim Jacket Side View",
      },
    ],

    rating: 4.8,

    numReviews: 18,
  },
];


module.exports = products;
