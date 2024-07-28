export const productos = [
    {
      id: 1,
      nombre: "playera caballero NIKE",
      precio: 900,
      categoria: "playeras",
      stock: 5,
      descripcion: "lorem",
      img: "https://www.innvictus.com/medias/playera-nike-sportswear-in-CK3012-010-1.png?context=bWFzdGVyfGltYWdlc3wxNjIzNjh8aW1hZ2UvcG5nfGltYWdlcy9oOWEvaGU5Lzk4MzQ3NjIxMDg5NTgucG5nfDI2NzZmYjU0NjdkODQzZGM4NGQ3MDNkMTFiNjMzYzk2YjE0NWUxYTU2ZTlkYWM1MjhmMTFmNDAwNGIzZTY0ODY",
    },
  
    {
      id: 2,
      nombre: "Playera dama NIKE",
      precio: 600,
      categoria: "playeras",
      stock: 5,
      descripcion: "lorem",
      img: "https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/3019167-1515V1.jpg",
    },
  
   {
      id: 3,
      nombre: "Playera niño NIKE",
      precio: 600,
      categoria: "playeras",
      stock: 5,
      descripcion: "lorem",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-LUu595gb_Pk0zmExZ44imR8hMAn_XD5Tw&s",
    },
   
    {
      id: 4,
      nombre: "pants caballero NIKE",
      precio: 1100,
      categoria: "pants",
      stock: 5,
      descripcion: "lorem",
      img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/2712ac0d-cb46-4eb8-aa20-0279eb6e9ab2.ca9f2fc7e61e63377a3384a3184722e8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    },
    {
      id: 5,
      nombre: "Pants dama NIKE",
      precio: 1000,
      categoria: "pants",
      stock: 5,
      descripcion: "lorem",
      img: "https://static.nike.com/a/images/t_default/057d97ca-ba94-4748-a3bf-02f8c307f1d2/pants-de-tiro-ultraalto-dri-fit-one-LDx5j8.png",
    },
  
    {
      id: 6,
      nombre: "Pants niño NIKE",
      precio: 1000,
      categoria: "pants",
      stock: 5,
      descripcion: "lorem",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/338d2085-7dc6-41a6-b93c-8bb4da8acd55/B+NSW+FLC+JOGGER.png",
    },
    {
      id: 7,
      nombre: "Tenis caballero NIKE",
      precio: 800,
      categoria: "tenis",
      stock: 5,
      descripcion: "lorem",
      img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/5b8646e8-beff-4c01-a256-911c92342f74.026721d2cd76ff7ae92c607c5a878505.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    },
    
    {
      id: 8,
      nombre: "Tenis dama NIKE",
      precio: 800,
      categoria: "tenis",
      stock: 5,
      descripcion: "lorem",
      img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a393c37-94de-49e3-a8df-7362a238f3fe/W+AIR+MAX+DN.png",
    },
  
    {
      id: 9,
      nombre: "Tenis niño NIKE",
      precio: 800,
      categoria: "tenis",
      stock: 5,
      descripcion: "lorem",
      img: "https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/1026166-0009V1.jpg",
    },
  
  
  
  
  
  
  
  
  
  
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };
  
  export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
      const productosFiltrados = productos.filter(
        (prod) => prod.cateroria === categoria
      );
  
      setTimeout(() => {
        resolve(productosFiltrados);
      }, 2000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
  
      setTimeout(() => {
        resolve(productoFiltrado);
      }, 2000);
    });
  };
  