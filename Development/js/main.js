/* List of hotProducts and its specs */
let hotProducts = [
    {
        "name": "Redmi Note 11 pro 5G  108MP Main Game  120Hz FHD+ AMOLED  Snapdragon 695",
        "brand": "Redmi",
        "image": "img/product/2_large.png",
        "specification": {
            "Brand": "Redmi",
            "SKU": "113874468_NP-1030964634",
            "Battery Capacity": "5000 - 5999 mAh",
            "Screen Size (inches)": "6.6 - 7 Inch",
            "Build Type": "Glass",
            "Camera Front (Megapixels)": "16MP front camera",
            "Camera Back (Megapixels)": "108MP wide camera +8MP ultra-wide camera +2MP macro camera",
            "Number Of Cameras": "4",
            "Display Protection": "Corning Gorilla Glass 5",
            "Model Year": "2022",
            "Network Connections": "2G,3G,4G",
            "Fast Charging": "yes",
            "Wireless Charging": "No",
            "Number of SIM Slots": "2",
            "Fingerprint Sensor": "Side Mounted",
            "Memory Card Slot Type": "Shared",
            "Refresh Rate": "120 Hz"
        },
        "price": 36999,
        "id": 2
    },
    {
        "name": "Samsung Galaxy A03s (4GB/64GB) II Triple Camera 13MP II 9.1mm Thickness II  5000 mAh Battery",
        "brand": "Samsung",
        "image": "img/product/4_large.png",
        "specification": {
            "Brand": "Samsung",
            "SKU": "106907918_NP-1028668623",
            "Battery Capacity": "6000 - 6999 mAh",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Plastic",
            "Camera Front (Megapixels)": "13 MP",
            "Camera Back (Megapixels)": "48 MP",
            "Number Of Cameras": "5",
            "Display Protection": "Not Specified",
            "Model Year": "2021",
            "Network Connections": "GSM",
            "Fast Charging": "Yes",
            "Wireless Charging": "No",
            "Number of SIM Slots": "2",
            "PPI": "200-300 PPI",
            "Charger Type": "Type-C",
            "Flash": "Yes",
            "Bluetooth Support": "Yes",
            "Wi-Fi": "Yes",
            "SIM Type": "Nano",
            "Removable Battery": "No",
            "GPS": "Yes",
            "FM Radio": "No",
            "NFC": "No",
            "Fingerprint Sensor": "Side Mounted",
            "Expandable Storage": "Yes",
            "Memory Card Slot Type": "Dedicated",
            "Video Resolution": "Full HD",
            "Operating System": "Android",
            "Notchted Display": "Yes",
            "Model": "SM-E225F",
            "Headphone Jack": "Yes",
            "Display Type": "IPS LCD",
            "Processor Type": "Helio P35",
            "Resolution": "Full HD"
        },
        "price": 16829,
        "id": 4
    },
    {
        "name": "Redmi Note 11  Snapdragon 680 Processor   50 MP Quad Camera  33 W pro Fast Charging",
        "brand": "Redmi",
        "image": "img/product/5_large.png",
        "specification": {
            "Brand": "Redmi",
            "SKU": "111391531_NP-1030180905",
            "Display Protection": "Corning Gorilla Glass 3",
            "Model Year": "2022",
            "Wireless Charging": "No",
            "Refresh Rate": "90 Hz",
            "Headphone Jack": "Yes",
            "Fast Charging": "Yes",
            "Expandable Storage": "Yes",
            "Display Type": "AMOLED",
            "Processor Type": "Not Specified",
            "Operating System": "Android 11",
            "Build Type": "Plastic",
            "Fingerprint Sensor": "Side Mounted",
            "Battery Capacity": "5000 - 5999 mAh",
            "Number Of Cameras": "5",
            "Number of SIM Slots": "2",
            "Camera Front (Megapixels)": "13 MP",
            "Camera Back (Megapixels)": "50 MP + 8 MP + 2 MP + 2 MP",
            "Video Resolution": "Not Specified",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Network Connections": "4G,3G,2G"
        },
        "price": 22999,
        "id": 5
    }
]
/* list of products and its specs */
const products = [
    {
        "name": "Samsung Galaxy F22 / sAMOLED / 6000 mAh",
        "brand": "Samsung",
        "image": "img/product/0_large.png",
        "specification": {
            "Brand": "Samsung",
            "SKU": "105875164_NP-1031000396",
            "Battery Capacity": "Not Specified",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Plastic",
            "Camera Front (Megapixels)": "Not Specified",
            "Camera Back (Megapixels)": "Not Specified",
            "Number Of Cameras": "5",
            "Display Protection": "Corning Gorilla Glass 5",
            "Model Year": "2021",
            "Network Connections": "Not Specified",
            "Fast Charging": "Yes",
            "Wireless Charging": "No",
            "Number of SIM Slots": "Not Specified"
        },
        "price": 20499,
        "id": 0
    },
    {
        "name": "Redmi Note 11 pro 5G  108MP Main Game  120Hz FHD+ AMOLED  Snapdragon 695",
        "brand": "Redmi",
        "image": "img/product/2_large.png",
        "specification": {
            "Brand": "Redmi",
            "SKU": "113874468_NP-1030964634",
            "Battery Capacity": "5000 - 5999 mAh",
            "Screen Size (inches)": "6.6 - 7 Inch",
            "Build Type": "Glass",
            "Camera Front (Megapixels)": "16MP front camera",
            "Camera Back (Megapixels)": "108MP wide camera +8MP ultra-wide camera +2MP macro camera",
            "Number Of Cameras": "4",
            "Display Protection": "Corning Gorilla Glass 5",
            "Model Year": "2022",
            "Network Connections": "2G,3G,4G",
            "Fast Charging": "yes",
            "Wireless Charging": "No",
            "Number of SIM Slots": "2",
            "Fingerprint Sensor": "Side Mounted",
            "Memory Card Slot Type": "Shared",
            "Refresh Rate": "120 Hz"
        },
        "price": 36999,
        "id": 2
    },
    {
        "name": "Samsung Galaxy A03s (4GB/64GB) II Triple Camera 13MP II 9.1mm Thickness II  5000 mAh Battery",
        "brand": "Samsung",
        "image": "img/product/4_large.png",
        "specification": {
            "Brand": "Samsung",
            "SKU": "106907918_NP-1028668623",
            "Battery Capacity": "6000 - 6999 mAh",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Plastic",
            "Camera Front (Megapixels)": "13 MP",
            "Camera Back (Megapixels)": "48 MP",
            "Number Of Cameras": "5",
            "Display Protection": "Not Specified",
            "Model Year": "2021",
            "Network Connections": "GSM",
            "Fast Charging": "Yes",
            "Wireless Charging": "No",
            "Number of SIM Slots": "2",
            "PPI": "200-300 PPI",
            "Charger Type": "Type-C",
            "Flash": "Yes",
            "Bluetooth Support": "Yes",
            "Wi-Fi": "Yes",
            "SIM Type": "Nano",
            "Removable Battery": "No",
            "GPS": "Yes",
            "FM Radio": "No",
            "NFC": "No",
            "Fingerprint Sensor": "Side Mounted",
            "Expandable Storage": "Yes",
            "Memory Card Slot Type": "Dedicated",
            "Video Resolution": "Full HD",
            "Operating System": "Android",
            "Notchted Display": "Yes",
            "Model": "SM-E225F",
            "Headphone Jack": "Yes",
            "Display Type": "IPS LCD",
            "Processor Type": "Helio P35",
            "Resolution": "Full HD"
        },
        "price": 16829,
        "id": 4
    },
    {
        "name": "Redmi Note 11  Snapdragon 680 Processor   50 MP Quad Camera  33 W pro Fast Charging",
        "brand": "Redmi",
        "image": "img/product/5_large.png",
        "specification": {
            "Brand": "Redmi",
            "SKU": "111391531_NP-1030180905",
            "Display Protection": "Corning Gorilla Glass 3",
            "Model Year": "2022",
            "Wireless Charging": "No",
            "Refresh Rate": "90 Hz",
            "Headphone Jack": "Yes",
            "Fast Charging": "Yes",
            "Expandable Storage": "Yes",
            "Display Type": "AMOLED",
            "Processor Type": "Not Specified",
            "Operating System": "Android 11",
            "Build Type": "Plastic",
            "Fingerprint Sensor": "Side Mounted",
            "Battery Capacity": "5000 - 5999 mAh",
            "Number Of Cameras": "5",
            "Number of SIM Slots": "2",
            "Camera Front (Megapixels)": "13 MP",
            "Camera Back (Megapixels)": "50 MP + 8 MP + 2 MP + 2 MP",
            "Video Resolution": "Not Specified",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Network Connections": "4G,3G,2G"
        },
        "price": 22999,
        "id": 5
    },
    {
        "name": "Samsung Galaxy A52s 5G (8GB/128GB) Super AMOLED 6.5\" Display  II 64MP Quad Camera II IP67 Dust/Water Resistant",
        "brand": "Samsung",
        "image": "img/product/6_large.png",
        "specification": {
            "Brand": "Samsung",
            "SKU": "107630688_NP-1030114318",
            "Battery Capacity": "4000 - 4999 mAh",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Plastic",
            "Camera Front (Megapixels)": "32 MP",
            "Camera Back (Megapixels)": "Not Specified",
            "Number Of Cameras": "5",
            "Display Protection": "Corning Gorilla Glass 5",
            "Model Year": "2021",
            "Network Connections": "GSM",
            "Fast Charging": "Yes",
            "Wireless Charging": "No",
            "Number of SIM Slots": "2",
            "PPI": "400-500 PPI",
            "Charger Type": "Type-C",
            "Flash": "Yes",
            "Bluetooth Support": "Yes",
            "Wi-Fi": "Yes",
            "SIM Type": "Nano",
            "Removable Battery": "No",
            "GPS": "Yes",
            "FM Radio": "Yes",
            "NFC": "Yes",
            "Fingerprint Sensor": "Side Mounted",
            "Expandable Storage": "Yes",
            "Memory Card Slot Type": "Dedicated",
            "Video Resolution": "4K",
            "Operating System": "Android 11",
            "Notchted Display": "Yes",
            "Model": "SM-A528B",
            "Headphone Jack": "Yes",
            "Display Type": "AMOLED",
            "Processor Type": "Not Specified",
            "Refresh Rate": "Above 90 Hz",
            "Resolution": "Full HD"
        },
        "price": 51479,
        "id": 6
    },
    {
        "name": "Samsung Galaxy M32 (6GB/128GB) II 64 MP Quad Camera II 6000 mAh Battery II FHD+ SAMOLED Display",
        "brand": "Samsung",
        "image": "img/product/7_large.png",
        "specification": {
            "Brand": "Samsung",
            "SKU": "105841199_NP-1030088419",
            "Battery Capacity": "6000 - 6999 mAh",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Plastic",
            "Camera Front (Megapixels)": "20.0 MP",
            "Camera Back (Megapixels)": "64.0 MP + 8.0 MP + 2.0 MP + 2.0 MP",
            "Number Of Cameras": "5",
            "Display Protection": "Glass",
            "Model Year": "2021",
            "Network Connections": "GSM",
            "Fast Charging": "Yes",
            "Wireless Charging": "No",
            "Number of SIM Slots": "2",
            "PPI": "400-500 PPI",
            "Charger Type": "Type-C",
            "Flash": "Yes",
            "Bluetooth Support": "Yes",
            "Wi-Fi": "Yes",
            "SIM Type": "Nano",
            "Removable Battery": "No",
            "GPS": "Yes",
            "FM Radio": "No",
            "NFC": "No",
            "Fingerprint Sensor": "Side Mounted",
            "Expandable Storage": "Yes",
            "Memory Card Slot Type": "Dedicated",
            "Video Resolution": "2160p",
            "Operating System": "Android 9 (Pie)",
            "Notchted Display": "Yes",
            "Model": "SM-M325F",
            "Headphone Jack": "Yes",
            "Display Type": "AMOLED",
            "Processor Type": "Octa-core",
            "Resolution": "Full HD"
        },
        "price": 27719,
        "id": 7
    },
    {
        "name": "OnePlus Nord CE 2 Lite 5G ( 8 GB RAM, 128 GB Storage | 6.59 inch 120Hz Display ) Free Breakage Insurance for 1 year",
        "brand": "OnePlus",
        "image": "img/product/9_large.png",
        "specification": {
            "Brand": "OnePlus",
            "SKU": "114638242_NP-1031162336",
            "Battery Capacity": "5000 - 5999 mAh",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Plastic",
            "Camera Front (Megapixels)": "16 MP",
            "Camera Back (Megapixels)": "64 MP",
            "Number Of Cameras": "4",
            "Display Protection": "Not Specified",
            "Model Year": "2022",
            "Network Connections": "4G,GSM,3G,2G,3.5G - HSDPA,5G",
            "Fast Charging": "33 Watt",
            "Wireless Charging": "Not Specified",
            "Number of SIM Slots": "2"
        },
        "price": 39999,
        "id": 9
    },
    {
        "name": "Samsung Galaxy A03 Core 2 GB RAM 32 GB ROM",
        "brand": "Samsung",
        "image": "img/product/10_large.png",
        "specification": {
            "Brand": "Samsung",
            "SKU": "110986063_NP-1030091225",
            "Battery Capacity": "5000 - 5999 mAh",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Plastic",
            "Camera Front (Megapixels)": "5",
            "Camera Back (Megapixels)": "8",
            "Number Of Cameras": "1",
            "Display Protection": "Not Specified",
            "Model Year": "2021",
            "Fast Charging": "Not Specified",
            "Wireless Charging": "Not Specified",
            "Number of SIM Slots": "2",
            "Video Resolution": "Not Specified",
            "Operating System": "Android",
            "Processor Type": "Not Specified"
        },
        "price": 12499,
        "id": 10
    },
    {
        "name": "OnePlus Nord 2T 5G (6.43 inch fluid Amoled Display | 80W SuperVOOC Charging)",
        "brand": "OnePlus",
        "image": "img/product/11_large.png",
        "specification": {
            "Brand": "OnePlus",
            "SKU": "114806947_NP-1031195360",
            "Battery Capacity": "4000 - 4999 mAh",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Glass",
            "Camera Front (Megapixels)": "32",
            "Camera Back (Megapixels)": "50",
            "Number Of Cameras": "4",
            "Display Protection": "Not Specified",
            "Model Year": "2022",
            "Network Connections": "4G,GSM,3G,2G,3.5G - HSDPA,5G",
            "Fast Charging": "80W",
            "Wireless Charging": "Not Specified",
            "Number of SIM Slots": "2"
        },
        "price": "Rs 64999.0",
        "id": 11
    },
    {
        "name": "Samsung Galaxy F22 (6GB/128GB) II Quad Camera 48MP II 9.4mm Thickness II Battery 6000 mAh",
        "brand": "Samsung",
        "specification": {
            "Brand": "Samsung",
            "SKU": "105964871_NP-1030060187",
            "Battery Capacity": "6000 - 6999 mAh",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Plastic",
            "Camera Front (Megapixels)": "13 MP",
            "Camera Back (Megapixels)": "48 MP",
            "Number Of Cameras": "5",
            "Display Protection": "Not Specified",
            "Model Year": "2021",
            "Network Connections": "GSM",
            "Fast Charging": "Yes",
            "Wireless Charging": "No",
            "Number of SIM Slots": "2",
            "PPI": "200-300 PPI",
            "Charger Type": "Type-C",
            "Flash": "Yes",
            "Bluetooth Support": "Yes",
            "Wi-Fi": "Yes",
            "SIM Type": "Nano",
            "Removable Battery": "Yes",
            "GPS": "Yes",
            "FM Radio": "Yes",
            "NFC": "No",
            "Fingerprint Sensor": "Side Mounted",
            "Expandable Storage": "Yes",
            "Memory Card Slot Type": "Dedicated",
            "Video Resolution": "Full HD",
            "Operating System": "Android 9 (Pie)",
            "Notchted Display": "Yes",
            "Model": "SM-E225F",
            "Headphone Jack": "Yes",
            "Display Type": "AMOLED",
            "Processor Type": "Helio G80",
            "Refresh Rate": "Above 90 Hz",
            "Resolution": "Full HD"
        },
        "price": 23759,
        "image": "img/product/12_large.png",
        "id": 12
    },
    {
        "name": "Apple iPhone 13",
        "brand": "Apple",
        "specification": {
            "Brand": "Apple",
            "SKU": "108691318_NP-1029353713",
            "Battery Capacity": "3000 - 3999 mAh",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Glass",
            "Camera Front (Megapixels)": "12 MP",
            "Camera Back (Megapixels)": "12 MP",
            "Number Of Cameras": "4",
            "Display Protection": "Glass",
            "Model Year": "2021",
            "Network Connections": "Not Specified",
            "Fast Charging": "Yes",
            "Wireless Charging": "Yes",
            "Number of SIM Slots": "1",
            "PPI": "400-500 PPI",
            "Video Resolution": "Full HD",
            "Operating System": "iOS",
            "Notchted Display": "Yes",
            "Headphone Jack": "No",
            "Display Type": "AMOLED",
            "Processor Type": "Not Specified",
            "Resolution": "Full HD"
        },
        "price": 139990,
        "image": "img/product/15_large.png",
        "id": 15
    },
    {
        "name": "Samsung Galaxy F22 (4GB/64GB) II Quad Camera 48MP II 6000 mAh Battery",
        "brand": "Samsung",
        "specification": {
            "Brand": "Samsung",
            "SKU": "110857535_NP-1030053311",
            "Battery Capacity": "6000 - 6999 mAh",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Plastic",
            "Camera Front (Megapixels)": "13 MP",
            "Camera Back (Megapixels)": "48 MP",
            "Number Of Cameras": "5",
            "Display Protection": "Not Specified",
            "Model Year": "2021",
            "Network Connections": "GSM",
            "Fast Charging": "Yes",
            "Wireless Charging": "No",
            "Number of SIM Slots": "2",
            "PPI": "200-300 PPI",
            "Charger Type": "Type-C",
            "Flash": "Yes",
            "Bluetooth Support": "Yes",
            "Wi-Fi": "Yes",
            "SIM Type": "Nano",
            "Removable Battery": "No",
            "GPS": "Yes",
            "FM Radio": "Yes",
            "NFC": "No",
            "Fingerprint Sensor": "Side Mounted",
            "Expandable Storage": "Yes",
            "Memory Card Slot Type": "Dedicated",
            "Video Resolution": "1080p",
            "Operating System": "Android 9 (Pie)",
            "Notchted Display": "Yes",
            "Model": "SM-E225F",
            "Headphone Jack": "Yes",
            "Display Type": "AMOLED",
            "Processor Type": "Octa-core",
            "Resolution": "Full HD"
        },
        "price": 20289,
        "image": "img/product/16_large.png",
        "id": 16
    },
    {
        "name": "Lava Benco V80 (AE9010) II Ram 4GB Storage 64GB II Face Unlock II Rear-mounted Fingerprint",
        "brand": "Lava",
        "specification": {
            "Brand": "Lava",
            "SKU": "106565033_NP-1030508831",
            "Battery Capacity": "Not Specified",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Plastic",
            "Camera Front (Megapixels)": "8 MP",
            "Camera Back (Megapixels)": "8 MP",
            "Number Of Cameras": "3",
            "Display Protection": "Plastic",
            "Model Year": "2021",
            "Network Connections": "GSM",
            "Fast Charging": "No",
            "Wireless Charging": "No",
            "Number of SIM Slots": "2",
            "PPI": "200-300 PPI",
            "Video Resolution": "Full HD",
            "Operating System": "Android",
            "Notchted Display": "Yes",
            "Model": "AE9010",
            "Headphone Jack": "Yes",
            "Display Type": "IPS LCD",
            "Processor Type": "Not Specified",
            "Resolution": "HD"
        },
        "price": 12200,
        "image": "img/product/17_large.png",
        "id": 17
    },
    {
        "name": "X-AGE G2 (3 GB RAM/32 GB ROM)  Smart Phone  Dual Sim   4G Enabled",
        "brand": "X-AGE",
        "specification": {
            "Brand": "X-AGE",
            "SKU": "104530756_NP-1025646045",
            "Display Protection": "Plastic",
            "Operating System": "Android",
            "Build Type": "Plastic",
            "Notchted Display": "No",
            "Model Year": "2020",
            "Battery Capacity": "3000 - 3999 mAh",
            "Number Of Cameras": "3",
            "Wireless Charging": "No",
            "Number of SIM Slots": "2",
            "Headphone Jack": "Yes",
            "Resolution": "Full HD",
            "Fast Charging": "Yes",
            "Camera Front (Megapixels)": "8 MP",
            "Camera Back (Megapixels)": "13 MP",
            "Video Resolution": "Not Specified",
            "Processor Type": "Not Specified",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Network Connections": "5G"
        },
        "price": 9499,
        "image": "img/product/19_large.png",
        "id": 19
    },
    {
        "name": "OnePlus Nord CE 5G [ 8GB RAM / 128GB Storage/ 90 Hz Fluid AMOLED /Fast charging 30W ](1 Year Screen Breakage Insurance)",
        "brand": "OnePlus",
        "specification": {
            "Brand": "OnePlus",
            "SKU": "105695456_NP-1027508880",
            "Battery Capacity": "Not Specified",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Glass",
            "Camera Front (Megapixels)": "Not Specified",
            "Camera Back (Megapixels)": "Not Specified",
            "Number Of Cameras": "4",
            "Display Protection": "Glass",
            "Model Year": "2021",
            "Network Connections": "5G",
            "Fast Charging": "Yes",
            "Wireless Charging": "Yes",
            "Number of SIM Slots": "Not Specified"
        },
        "price": 44999,
        "image": "img/product/20_large.png",
        "id": 20
    },
    {
        "name": "Samsung Galaxy M32  6000 mAh Battery  FHD+ SAMOLED display  64 MP Quad Camera",
        "brand": "Samsung",
        "specification": {
            "Brand": "Samsung",
            "SKU": "105745342_NP-1027549951",
            "Battery Capacity": "6000 - 6999 mAh",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Plastic",
            "Number Of Cameras": "5",
            "Display Protection": "Glass",
            "Model Year": "2021",
            "Fast Charging": "Yes",
            "Wireless Charging": "No"
        },
        "price": 27999,
        "image": "img/product/22_large.png",
        "id": 22
    },
    {
        "name": "Nokia C1 2nd Edition (TA-1165) Dual Sim II Ram 1GB, Storage 16GB II 5.45\" Display",
        "brand": "Nokia",
        "specification": {
            "Brand": "Nokia",
            "SKU": "103372317_NP-1028767463",
            "Display Protection": "Glass",
            "Model Year": "2021",
            "Wireless Charging": "No",
            "Headphone Jack": "Yes",
            "Resolution": "Others",
            "Fast Charging": "Not Specified",
            "Display Type": "TFT LCD",
            "Processor Type": "Not Specified",
            "Model": "TA-1165DS",
            "Operating System": "Nokia OS",
            "Build Type": "Plastic",
            "Notchted Display": "Yes",
            "Battery Capacity": "Not Specified",
            "Number Of Cameras": "2",
            "Number of SIM Slots": "Not Specified",
            "Camera Front (Megapixels)": "5 MP",
            "Camera Back (Megapixels)": "1 MP",
            "Video Resolution": "Not Specified",
            "Screen Size (inches)": "5.1 - 5.5 Inch",
            "PPI": "200-300 PPI",
            "Network Connections": "GSM"
        },
        "price": 7799,
        "image": "img/product/23_large.png",
        "id": 23
    },
    {
        "name": "POCO F3  SD 870 With 5G  48 MP Camera / 6.67\" AMOLED Dot Display",
        "brand": "POCO",
        "specification": {
            "Brand": "POCO",
            "SKU": "105669510_NP-1027751005",
            "Battery Capacity": "4000 - 4999 mAh",
            "Screen Size (inches)": "6.6 - 7 Inch",
            "Build Type": "Glass",
            "Camera Front (Megapixels)": "20 MP",
            "Camera Back (Megapixels)": "48 MP + 8 MP + 5 MP",
            "Number Of Cameras": "4",
            "Display Protection": "Corning Gorilla Glass 5",
            "Model Year": "2021",
            "Network Connections": "5G",
            "Fast Charging": "Yes",
            "Wireless Charging": "No",
            "Number of SIM Slots": "2",
            "Headphone Jack": "No",
            "Display Type": "AMOLED"
        },
        "price": 46999,
        "image": "img/product/25_large.png",
        "id": 25
    },
    {
        "name": "Nokia C1 2nd Edition (1GB RAM 16GB ROM)",
        "brand": "Nokia",
        "specification": {
            "Brand": "Nokia",
            "SKU": "105923799_NP-1027834526",
            "Display Protection": "Not Specified",
            "Operating System": "Android 11",
            "Build Type": "Not Specified",
            "Model Year": "2021",
            "Battery Capacity": "Not Specified",
            "Number Of Cameras": "1",
            "Wireless Charging": "No",
            "Number of SIM Slots": "Not Specified",
            "Fast Charging": "No",
            "Camera Front (Megapixels)": "Not Specified",
            "Camera Back (Megapixels)": "Not Specified",
            "Video Resolution": "HD",
            "Processor Type": "Not Specified",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Network Connections": "3G"
        },
        "price": 7699,
        "image": "img/product/26_large.png",
        "id": 26
    },
    {
        "name": "Redmi 10 Prime 2022  50 MP Quad Camera  6000 mAh Battery  6.5 \"FHD+ Display",
        "brand": "Redmi",
        "specification": {
            "Brand": "Redmi",
            "SKU": "112958952_NP-1030666826",
            "Display Protection": "Corning Gorilla Glass 3",
            "Build Type": "Plastic",
            "Model Year": "2022",
            "Battery Capacity": "5000 - 5999 mAh",
            "Number Of Cameras": "5",
            "Wireless Charging": "No",
            "Fast Charging": "Yes",
            "Camera Front (Megapixels)": "8 MP, f/2.0, (wide), 1/4.0\u201d, 1.12\u00b5m",
            "Camera Back (Megapixels)": "50 MP, f/1.8, (wide), PDAF 8 MP, f/2.2, 120\u02da (ultrawide) 2 MP, f/2.4, (macro) 2 MP, f/2.4, (depth)",
            "Screen Size (inches)": "6.1 - 6.5 Inch"
        },
        "price": 20499,
        "image": "img/product/27_large.png",
        "id": 27
    },
    {
        "name": "Samsung Galaxy A12 Nacho II Quad Camera 48MP II 6.5 inches PLS IPS Display II Battery 5000mAh",
        "brand": "Samsung",
        "specification": {
            "Brand": "Samsung",
            "SKU": "105457106_NP-1027184262",
            "Battery Capacity": "5000 - 5999 mAh",
            "Screen Size (inches)": "6.1 - 6.5 Inch",
            "Build Type": "Plastic",
            "Camera Front (Megapixels)": "8 MP",
            "Camera Back (Megapixels)": "48 MP",
            "Number Of Cameras": "5",
            "Display Protection": "Glass",
            "Model Year": "2021",
            "Network Connections": "4G",
            "Fast Charging": "Yes",
            "Wireless Charging": "No",
            "Number of SIM Slots": "Not Specified",
            "PPI": "200-300 PPI",
            "Video Resolution": "Full HD",
            "Operating System": "Android",
            "Notchted Display": "Yes",
            "Model": "SM-A127F",
            "Headphone Jack": "Yes",
            "Processor Type": "Not Specified"
        },
        "price": "Rs 19799.0",
        "image": "img/product/28_large.png",
        "id": 28
    },
    {
        "name": "Realme C20 (2GB RAM /32GB ROM)  6.5\" Display",
        "brand": "RealMe",
        "specification": {
            "Brand": "RealMe",
            "SKU": "106504406_NP-1028113233",
            "Display Protection": "Glass",
            "Operating System": "Android 10",
            "Build Type": "Plastic",
            "Model Year": "2021",
            "Battery Capacity": "5000 - 5999 mAh",
            "Number Of Cameras": "2",
            "Wireless Charging": "No",
            "Fast Charging": "No",
            "Video Resolution": "Not Specified",
            "Processor Type": "Not Specified",
            "Screen Size (inches)": "6.1 - 6.5 Inch"
        },
        "price": 12849,
        "image": "img/product/29_large.png",
        "id": 29
    },
    {
        "name": "Redmi 9C 6.53\" IPS LCD Display  RAM: 3 GB/ ROM: 64 GB  Helio G35 Processor",
        "brand": "Redmi",
        "specification": {
            "Brand": "Redmi",
            "SKU": "104330861_NP-1025284462",
            "Display Protection": "Glass",
            "Operating System": "Android 10",
            "Build Type": "Plastic",
            "Model Year": "2020",
            "Battery Capacity": "5000 - 5999 mAh",
            "Number Of Cameras": "4",
            "Wireless Charging": "Not Specified",
            "Fast Charging": "No",
            "Video Resolution": "HD",
            "Processor Type": "Not Specified",
            "Screen Size (inches)": "6.1 - 6.5 Inch"
        },
        "price": 15999,
        "image": "img/product/30_large.png",
        "id": 30
    }
]

//creating objectToCard function
function objectToCard(product) {
    const productCard = document.createElement("div")
    //<div></div>
    productCard.classList.add("card")
    //<div class="card"></div>
    const cardImageLink = document.createElement("a")
    //<a></a>
    cardImageLink.setAttribute("href", "product_detail.html")
    //<a href="product_detail.html"></a>
    cardImageLink.classList.add("product-link")
    //<a class="product-link" href="product_detail.html"></a>


    // When the link is clicked to go to product detail page, store the products id in local storage so that,
    // it can later be retrieved in that page and the information of the product containing that product id can be
    // displayed dynamically
    cardImageLink.addEventListener("click", function () {
    //localStorage= {"product-id":1}
        localStorage.setItem("product-id", product.id)

    })
    // Store the product id even if the image is middle clicked
    cardImageLink.addEventListener("auxclick", function () {
        localStorage.setItem("product-id", product.id)
    })

    const cardImage = document.createElement("img")
    //<img>
    cardImage.classList.add("card-image")
    //<img class="card-image">
    cardImage.setAttribute("src", product.image)
    //<img class="card-image" src="img/product/1.png">
    cardImage.setAttribute("alt", product.name)
    //<img class="card-image" src="img/product/1.png" alt="Samsung N20">

    // Appends a child element image to the card image link
    cardImageLink.appendChild(cardImage)
    //<a class="product-link" href="product_detail.html"><img class="card-image" src="img/product/1.png" alt="Samsung N20"></a>
    // Adds a child element card image link to product card
    productCard.appendChild(cardImageLink)
    //<div class="card"><a class="product-link" href="product_detail.html"><img class="card-image" src="img/product/1.png" alt="Samsung N20"></a></div>


    //creates an element div
    const cardBody = document.createElement("div")
    // <div> </div>
    //adds an element card body to the div
    cardBody.classList.add("card-body")
    // <div class="card-body"></div>

    const cardTitleContainer = document.createElement("div")
    // <div></div>
    cardTitleContainer.classList.add("card-title-container")
    // <div class="card-title-container"> </div>
    const cardTitle = document.createElement("p")
    // <p></p>
    cardTitle.classList.add("card-title")
    // <p class=""card-title></p>
    cardTitle.innerHTML = product.name
    // <p class= "card-title">productname</p>
    cardTitleContainer.appendChild(cardTitle)
    // <div class="card-title-container"> <p class= "card-title">productname</p></div>
    const cardPrice = document.createElement("p")
    // <p></p>
    cardPrice.classList.add('card-price')
    //<p class= "card-price"></p>
    //tolocaleString converts 10000 to "10,000"
    cardPrice.innerHTML = `Rs. ${product.price.toLocaleString()}`
    //<p class= "card-price">Rs. 10,000</p>
    cardBody.appendChild(cardTitleContainer)
    //<div class= "card-body"><div class="card-title-container"> <p class= "card-title">productname</p></div></div>
    cardBody.appendChild(cardPrice)
    //<div class= "card-body"><div class="card-title-container"> <p class= "card-title">productname</p></div><p class= "card-price"></p></div>
    productCard.appendChild(cardBody)
    //<div class="card"><a class="product-link" href="product_detail.html"><img class="card-image" src="img/product/1.png" alt="Samsung N20"></a><div class= "card-body"><div class="card-title-container"> <p class= "card-title">productname</p></div><p class= "card-price"></p></div></div>

    //returns the product card
    return productCard
}

