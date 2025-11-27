import React, { useState, useEffect } from "react";

const clientsData = [
  {
    id: 1,
    name: "Client 1",
    logo: "https://images.unsplash.com/photo-1649734924961-858e997c55de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8N3VwJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Client 2",
    logo: "https://1000logos.net/wp-content/uploads/2020/09/Halliburton-Emblem.jpg",
  },
  {
    id: 3,
    name: "Client 3",
    logo: "https://images.seeklogo.com/logo-png/49/1/nigerian-breweries-logo-png_seeklogo-491557.png",
  },
  {
    id: 4,
    name: "Client 4",
    logo: "https://img.favpng.com/24/3/3/logo-of-nbc-television-png-favpng-EUfYuERujU3gETPfDsDJvDfDB.jpg",
  },
  {
    id: 5,
    name: "Client 5",
    logo: "https://www.uacnplc.com/wp-content/uploads/2023/02/UAC-SMART-LOGO-01.png",
  },
  {
    id: 6,
    name: "Client 6",
    logo: "https://img.favpng.com/2/5/16/logo-dangote-group-lagos-brand-dangote-cement-png-favpng-BibMLDU5d3ADB8jRSrUXfM9ii_t.jpg",
  },
  {
    id: 7,
    name: "Client 7",
    logo: "https://img.favpng.com/19/19/3/cadbury-cadbury-logo-in-golden-script-Mzh3bd7Z_t.jpg",
  },
  {
    id: 8,
    name: "Client 8",
    logo: "https://chatgpt.com/backend-api/estuary/content?id=file_000000008754723090c0713c145be39e&ts=490023&p=fs&cid=1&sig=950a7c98126baf775599b16bcdb3d7b37813bf34b2b5cdb460954ede2de347ed&v=0",
  },
  {
    id: 9,
    name: "Client 9",
    logo: "https://img.favpng.com/22/24/24/nbc-logo-TX6kFMzW_t.jpg",
  },
  {
    id: 10,
    name: "Client 10",
    logo: "https://brandslogos.com/wp-content/uploads/images/guinness-logo.png",
  },
];

const Clients = () => {
  const [slide, setSlide] = useState(0);

  // auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % clientsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Trusted Clients
        </h2>

        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${slide * 20}%)`, // 10 clients, 5 visible at a time => 20% shift per slide
            }}
          >
            {clientsData.map((client) => (
              <div
                key={client.id}
                className="flex flex-col items-center justify-center w-1/5 p-4"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-24 h-24 object-contain mb-2"
                />
                <span className="text-sm font-medium">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
