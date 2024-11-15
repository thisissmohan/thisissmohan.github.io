import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Ivp from "../../assets/images/ivp-removebg-preview.png";
import AutoShop from "../../assets/images/autoShop-Photoroom.png";
import Momekz from "../../assets/images/mahalola-Photoroom.png";
import Corr from "../../assets/images/corr-Photoroom.png";
import Pawdog from "../../assets/images/pawdog-Photoroom.png";
import Plspeak from "../../assets/images/plspeak-Photoroom.png";
import Mahalola from "../../assets/images/mahalola-Photoroom.png";
import MomekzMobile from "../../assets/images/mahalolaMobile-Photoroom.png";
import Autoshopmobile from "../../assets/images/autoshopmobile-Photoroom.png";
import IvpMobile from "../../assets/images/ivpMobile-Photoroom.png";
import MahalolaMobile from "../../assets/images/mahalolaMobile-Photoroom.png";

const cardData = [
  {
    title: "InvestPulse",
    subtitle: "Mobile App",
    image: IvpMobile,
    cardData: [
      {
        title: "Project Overview",
        content: `Investpulse Mobile App is designed to simplify property management for real estate investors. It provides a centralized platform where users can easily manage their investment portfolios, track financials, and make informed decisions. The app gives real-time insights into the performance of investment properties, including rental income, expenses, and key financial metrics, enabling investors to monitor their portfolios efficiently. With a focus on ease of use, Investpulse eliminates the complexity of spreadsheets, making property management intuitive and accessible for both seasoned investors and newcomers.`,
      },

      {
        title: "Challenges",
        content: `1. **Integration of Real-Time Data**: Ensuring that the app accurately and consistently reflects real-time data for rental income, expenses, and financial metrics without latency.\n\n2. **Data Security and Privacy**: Protecting sensitive financial data and user information from unauthorized access while ensuring compliance with data privacy regulations.\n\n3. **Cross-Platform Consistency**: Ensuring that the app works seamlessly across different devices and operating systems, providing a consistent user experience on both Android and iOS.`,
      },
      {
        title: "Approach",
        content: `1. **Mobile App Development**: Developed a mobile app using React Native to ensure cross-platform compatibility. The app allows real estate investors to manage their portfolios seamlessly on both iOS and Android devices.\n\n2. **Real-Time Data Synchronization**: Integrated APIs for real-time data tracking, allowing users to view up-to-date rental income, expenses, and financial metrics without delays.\n\n3. **User-Centric Design**: Focused on creating a simple, intuitive user interface that displays key metrics in a visually appealing manner. Used UX/UI best practices to ensure ease of navigation and functionality.\n\n4. **Data Protection and Security**: Implemented robust encryption and data security measures to ensure that user financial data is kept secure and private.\n\n5. **Cloud Integration**: Leveraged cloud services to store data securely and ensure seamless synchronization across all devices, ensuring that users always have access to the latest information.`,
      },
      {
        title: "Solution",
        content: `Investpulse Mobile App offers real estate investors a seamless way to manage their portfolios on the go. The app provides:\n\n1. **Real-Time Insights**: Users receive up-to-date information on their property performance, including rental income and expenses, making it easier to manage investments effectively.\n\n2. **Simplified Financial Management**: The app organizes financial data, presenting it in easy-to-understand reports, eliminating the need for spreadsheets and complex calculations.\n\n3. **Intuitive User Interface**: Designed to be simple and user-friendly, the app allows users to track their investments with ease, ensuring that even non-expert investors can navigate and understand their financial data.\n\n4. **Cloud Synchronization**: With cloud integration, users can access their data from any device at any time, ensuring convenience and flexibility.\n\n5. **Data Security**: Strong encryption protocols ensure that sensitive financial information remains protected, allowing users to confidently manage their investments.`,
      },
      {
        title: "Technologies Used",
        content: `1. **React Native**: Used to develop the mobile app for both Android and iOS, providing a consistent experience across platforms.\n\n2. **Firebase**: Implemented for real-time data syncing, ensuring that all updates to rental income and expenses are reflected instantly across all devices.\n\n3. **Node.js**: Used to build the backend, enabling efficient data management and integration with external services for tracking investment performance.\n\n4. **AWS**: Leveraged AWS for cloud storage and hosting, providing secure and scalable solutions for storing and managing financial data.`,
      },
      {
        title: "Conclusion",
        content: `The Investpulse Mobile App has successfully simplified the process of managing real estate investments. With its user-friendly interface and real-time financial insights, the app empowers investors to make data-driven decisions and track their investment performance with ease. The app’s cloud integration and strong security measures ensure that users can access their data anytime, anywhere, while maintaining full control over their financial information. By streamlining property management and eliminating the need for complex spreadsheets, Investpulse has become an indispensable tool for real estate investors looking to optimize their portfolios and maximize their returns.`,
      },
    ],
  },
  {
    title: "1800AutoShop",
    subtitle: "Mobile App",
    image: Autoshopmobile,
    cardData: [
      {
        title: "Project Overview",
        content:
          "The 1800AutoShop mobile app was developed to provide a seamless, user-friendly platform that allows vehicle owners to easily find, schedule, and manage vehicle maintenance services. The app serves as an extension of the 1800AutoShop website, offering users the ability to register their vehicles, receive service reminders, book appointments, and access a curated selection of reliable local auto service providers. My role as a developer was to create an intuitive mobile application that simplifies the entire process of vehicle maintenance while ensuring that users can stay on top of their car’s health with minimal effort.",
      },
     
      {
        title: "Challenges",
        content:
          "During the development of the 1800AutoShop mobile app, several challenges were encountered:\n" +
          "1. Cross-Platform Development: Building a mobile app that worked seamlessly on both iOS and Android required careful design and implementation to ensure that features were consistent across platforms.\n" +
          "2. Real-Time Data Sync: Ensuring that appointment availability, reminders, and service updates were in real-time was crucial for maintaining an accurate and responsive user experience.\n" ,
      },
      {
        title: "Approach",
        content:
          "To address these challenges and meet the client’s objectives, the following approach was taken:\n" +
          "1. Cross-Platform Development with React Native: React Native was used to build the mobile app, allowing for shared code across both iOS and Android platforms, ensuring cost and time efficiency while maintaining native-like performance.\n" +
          "2. Back-End Integration with Node.js: The app’s back-end was powered by Node.js, providing fast and efficient server-side handling of user requests, appointment bookings, and data syncing.\n" +
          "3. Real-Time Data with Firebase: Firebase was integrated to manage real-time notifications for service reminders, appointment updates, and promotions, ensuring users received up-to-date information.\n" +
          "4. Push Notifications with Firebase Cloud Messaging (FCM): Push notifications were implemented to remind users about upcoming appointments, new offers, and tips for vehicle maintenance.\n" +
          "5. Database Management with MongoDB: MongoDB was used to store and manage user profiles, vehicle information, service provider details, and appointment histories in a scalable and flexible manner.\n"
          ,
      },
      {
        title: "Solution",
        content:
          "The 1800AutoShop mobile app offers an intuitive and comprehensive solution to vehicle owners seeking hassle-free maintenance services. Key features include:\n" +
          "1. Easy Search for Local Service Providers: Users can search for nearby auto service providers based on location, service type, and reviews, helping them find trusted professionals quickly.\n" +
          "2. Service Reminders and Notifications: Users who register their vehicle details receive personalized reminders for scheduled maintenance tasks, ensuring their cars stay in optimal condition.\n" +
          "3. Seamless Appointment Scheduling: The app offers users the ability to book maintenance appointments with service providers directly, streamlining the process and reducing the chances of missed or delayed services.\n" +
          "4. Exclusive Deals and Offers: Users can access special deals, discounts, and promotions from local service providers, helping them save money while keeping their vehicles well-maintained.\n" +
          "5. Educational Resources: The app also provides helpful resources, including maintenance tips, industry news, and guides on how to take care of their vehicles, making it a one-stop-shop for all vehicle-related needs.",
      },
      {
        title: "Technologies Used",
        content:
          "The 1800AutoShop mobile app was developed using the following technologies:\n" +
          "1. React Native: For cross-platform mobile development, ensuring a consistent experience across iOS and Android devices.\n" +
          "2. Node.js: For building the app's back-end, handling APIs, and managing interactions with the database.\n" +
          "3. Firebase: For real-time data synchronization, push notifications, and user authentication.\n" +
          "4. MongoDB: For storing user data, service provider information, and vehicle records.\n" +
          "5. JWT: For implementing secure user authentication and ensuring privacy.\n" 
          ,
      },
      {
        title: "Conclusion",
        content:
          "The 1800AutoShop mobile app successfully enhanced the user experience by providing a simple yet powerful platform for managing vehicle maintenance. By offering features like easy appointment scheduling, personalized service reminders, and access to exclusive deals, the app helps users maintain their vehicles with minimal effort. The app’s integration with real-time data, secure authentication, and cross-platform development ensures that it’s both reliable and efficient. This project highlights my ability to develop feature-rich mobile applications that address user needs while ensuring a seamless and engaging experience.",
      },
    ],
  },
  {
    title: "Momekz",
    subtitle: "Mobile App",
    image: MomekzMobile,
    cardData: [
      {
        title: "Project Overview",
        content: `The MomeKZ Mobile App is designed to streamline vendor operations, offering a unified platform for managing daily business activities. From tracking orders and updating inventory to fostering team collaboration, the app eliminates operational bottlenecks and empowers vendors to focus on scaling their business. With features such as real-time sales monitoring, staff management, and inventory control, MomeKZ simplifies complex tasks and ensures vendors have full operational control at their fingertips.`,
      },
      {
        title: "Key Objectives",
        content: `1. **Centralized Management**: Offer a single platform for vendors to manage inventory, orders, staff, and other key business functions seamlessly.
        
        2. **Real-Time Updates**: Ensure accurate, up-to-date information through instantaneous data synchronization across devices and platforms.
        
       `,
      },
      {
        title: "Challenges",
        content: `1. **Complex Functionality**: Integrating various business features into one platform without overwhelming users.
        
        2. **Data Consistency**: Ensuring that updates and changes made in real-time are reflected instantly across all devices and branches.
        
        3. **Scalability**: Designing a flexible and scalable solution that adapts as the business grows and new needs arise.
        
        4. **User Training**: Ensuring that all users, regardless of tech expertise, can easily adopt and navigate the app.`,
      },
      {
        title: "Approach",
        content: `1. **Modular Architecture**: Divided the app into key sections (sales, inventory, settings) to allow vendors to focus on specific areas at a time.
        
        2. **Real-Time Data Sync**: Integrated cloud-based technology to instantly reflect any updates—whether it’s inventory changes or purchase orders—across the platform.
        
        3. **Clean and Simple UI**: Designed the app interface to minimize clutter, making it user-friendly and intuitive for all users.
        
        4. **Security-First Design**: Implemented encryption and secure authentication methods to protect sensitive data and ensure privacy.`,
      },
      {
        title: "Solution",
        content: `The MomeKZ Mobile App provides vendors with the following features:
        
        1. **Dashboard**: Offers a comprehensive overview of sales, inventory, and overall business performance in a visual format.
        
        2. **Branch & Staff Management**: Enables vendors to manage team members, assign roles, and track activities at the branch level with ease.
        
       `,
      },
      {
        title: "Technologies Used",
        content: `1. **React Native**: Ensures a seamless, responsive user experience across both iOS and Android devices.
        
        2. **Node.js & MongoDB**: Supports backend operations and data storage for scalability and reliability.
        
        3. **AWS**: Powers cloud-based synchronization for real-time data updates across the platform.
        
        4. **Socket.IO**: Enables instant communication and collaboration between vendors, staff, and suppliers.`,
      },
      {
        title: "Conclusion",
        content: `The MomeKZ Mobile App has transformed how vendors manage their businesses. By simplifying complex tasks like sales tracking, inventory management, and team coordination, the app offers vendors an efficient, user-friendly solution. With real-time updates, modular features, and a security-focused design, MomeKZ has become an indispensable tool for businesses looking to optimize their operations and achieve scalable growth.`,
      },
    ]
    
  },
  {
    title: "Mahlolah",
    subtitle: "Mobile App",
    image: MahalolaMobile,
    cardData: [
      {
        title: "Project Overview",
        content: `The Mahlolah Mobile App is a cutting-edge solution that provides users with a seamless payment processing system and real-time chat support, aimed at enhancing customer-business interactions. The app is designed to ensure secure transactions while enabling instant communication, making it an ideal platform for businesses and their customers. As a developer, I focused on creating a user-friendly, secure mobile application that offers both payment integration and live chat features for efficient and convenient transactions.`,
      },
      
    
      
      {
        title: "Challenges",
        content: `1. **Optimizing for Multiple Payment Methods**: Integrating various payment gateways, such as credit cards and digital wallets, into a single, unified mobile platform.
        
        2. **Real-Time Communication**: Ensuring the chat feature could handle multiple users and provide instant responses without lag, especially during peak usage times.
        
        3. **Security**: Safeguarding user data during transactions and ensuring secure authentication without compromising app performance.
        
       `,
      },
      
      {
        title: "Approach",
        content: `1. **Payment Gateway Integration**: Integrated secure payment gateways such as Stripe and PayPal into the mobile app to handle transactions. This offered flexibility for users to choose their preferred payment method, including credit cards, debit cards, and digital wallets.
        
        2. **Real-Time Chat System**: Used WebSocket technology to build a responsive chat system that enables businesses to respond to customer inquiries instantly. This feature ensures that both businesses and customers are kept informed in real time.
        
        3. **Secure Authentication**: Implemented OAuth 2.0 for secure login, with additional biometric authentication (fingerprint/Face ID) for added security. All payment transactions were encrypted with SSL to protect sensitive data.
        
        4. **Push Notifications**: Integrated push notifications to keep users informed about payment updates, service reminders, and messages within the chat system, ensuring continuous engagement.
        
        5. **Mobile Optimization**: Ensured the app’s UI was responsive and compatible with both Android and iOS devices, using React Native for a consistent cross-platform experience.
        
        6. **Offline Support**: Enabled offline mode for users to access basic features such as payment history and chat messages, even when an internet connection is not available.`,
      },
      
      {
        title: "Solution",
        content: `The Mahlolah Mobile App offers users an intuitive, secure platform for managing payments and communicating with businesses. Key features include:
        
        1. **Multi-Payment Integration**: The app supports a variety of payment methods, including credit/debit cards, PayPal, and digital wallets, making transactions seamless for users.
        
        2. **Real-Time Communication**: With the integrated chat feature, businesses and customers can resolve issues instantly, ensuring high-quality customer service.
        
        3. **Secure Transactions**: Payment processes are encrypted, and all sensitive user information is protected, ensuring secure and trusted transactions.
        
        4. **Push Notifications**: The app sends real-time updates about payments, service status, and chat messages, keeping users informed at all times.
        
        5. **Cross-Platform Optimization**: Built using React Native, the app ensures a consistent experience on both iOS and Android devices.
        
        6. **Offline Access**: Even without internet access, users can view payment history and chat messages, making the app more reliable in areas with poor connectivity.`,
      },
      
      {
        title: "Technologies Used",
        content: `1. **React Native**: Used to build the mobile app for both iOS and Android platforms, ensuring code reusability and consistency across devices.
        
        2. **Stripe/PayPal API**: Integrated payment solutions for secure and seamless transactions.
        
        3. **WebSocket**: Implemented for real-time communication, enabling instantaneous messages between users and businesses.
        
        `,
      },
      
      {
        title: "Conclusion",
        content: `The Mahlolah Mobile App effectively meets its objectives by combining secure payment integration with real-time chat functionality. The app ensures a smooth, secure, and user-friendly experience for both businesses and customers. By focusing on ease of use, security, and mobile optimization, Mahlolah provides a reliable platform that supports seamless transactions and instant communication, making it an essential tool for businesses looking to streamline their operations and enhance customer satisfaction.`,
      },
    ]
    
  },
];

const cardData1 = [
  {
    title: "InvestPulse",
    subtitle: "Web App",
    image: Ivp,
    cardData: [
      {
        title: "Project Overview",
        content: `InvestPulse was created to address a common challenge faced by real estate investors: managing property finances across multiple spreadsheets and systems. As the lead developer, my task was to design an intuitive and efficient web platform that consolidates investment data, automates financial tracking, and provides actionable insights. The goal was to create a centralized, user-friendly solution tailored specifically to real estate investors, enabling them to view and analyze the financial health of their portfolios in real time.`,
      },

      {
        title: "Challenges",
        content: `This project came with several unique challenges:
        
        1. **Real-Time Data Updates**  
           Financial data needed to be accurate and constantly updated without manual refreshes, requiring a robust backend design.
        
        2. **User-Friendly Design for Complex Data**  
           Translating complex financial metrics into an accessible format without overwhelming users was essential.
        
      `,
      },
      {
        title: "Approach",
        content: `To address these challenges, we implemented the following development strategies:
        
        1. **Agile Development**  
           We followed agile methodology, allowing us to iterate quickly, test features, and gather feedback at every stage.
        
        2. **Frontend and UX Collaboration**  
           Working closely with UX/UI designers, we created a dashboard that displayed financial insights in a digestible format, while maintaining a minimalist, professional look.
        
        3. **API and Data Handling**  
           Using **Node.js** and **MongoDB**, we built a backend that facilitated real-time data synchronization and efficient data retrieval, ensuring a seamless user experience.
        
        4. **Advanced Security Protocols**  
           Data security was a top priority. We integrated encryption and regular auditing practices, meeting industry standards for safeguarding sensitive financial data.`,
      },
      {
        title: "Solution",
        content: `InvestPulse provides an all-in-one platform for real estate investors to:
        
        1. **View Financial Metrics in Real Time**  
           The dashboard displays key metrics like rental income, expenses, and net cash flow in real time.
        
        2. **Simplify Financial Management**  
           With automated financial summaries and reports, users can manage their portfolios effortlessly, without relying on spreadsheets.
        
        3. **Receive Data-Driven Insights**  
           Built-in alerts and notifications prompt users to take action or review performance, enhancing the decision-making process.
        
        4. **Ensure Secure Data Handling**  
           With encrypted storage and secure access controls, users have peace of mind knowing their information is well-protected.`,
      },
      {
        title: "Technologies Used",
        content: `The technology stack for InvestPulse includes:
        
        - **React.js**  
          For a responsive, interactive frontend.
        
        - **Node.js and Express.js**  
          For backend management, API integrations, and real-time data handling.
        
        - **MongoDB**  
          For flexible data storage that supports complex property and financial records.`,
      },
      {
        title: "Conclusion",
        content: `InvestPulse has successfully streamlined the way investors manage their property portfolios, offering a comprehensive yet simple tool that brings all critical data together in one place. Through developing InvestPulse, I had the opportunity to:
        
        - **Tackle complex financial challenges.**
        - **Optimize a real-time user experience.**
        - **Ensure top-level security.**
        
        Ultimately, this robust solution makes property management straightforward and insightful for investors.`,
      },
    ],
  },
  {
    title: "1800AutoShop",
    subtitle: "Web App",
    image: AutoShop,
    cardData: [
      {
        title: "Project Overview",
        content: `The 1800AutoShop website was developed to help users find reliable and trustworthy vehicle maintenance shops in their area. As a full-stack developer, my responsibility was to design and build an easy-to-use platform that connects users with local auto shops, simplifying the search for vehicle maintenance services. The website also aimed to offer additional features such as appointment scheduling, service reminders, and access to exclusive deals to ensure users maintain their vehicles efficiently and cost-effectively.`,
      },

      {
        title: "Challenges",
        content: `Some challenges faced during the development of the 1800AutoShop website included:
        
        1. **Integrating Real-Time Data**  
           The platform needed to display real-time availability for service appointments, which required integrating with external APIs from car service providers.
        
        2. **Scalability**  
           Ensuring that the platform could scale effectively as the number of registered service providers and users grew.`,
      },

      {
        title: "Approach",
        content: `To ensure a smooth and efficient development process, the following approach was taken:
        
        1. **Front-End Design with React**  
           Using React, I built a dynamic and responsive front-end, allowing users to easily search for nearby auto shops, view their services, and schedule appointments.
        
        2. **Back-End API with Node.js**  
           The back-end of the website was built using Node.js, enabling fast and efficient handling of user requests, appointment scheduling, and data synchronization with the car service providers.
        
        3. **Database Management with MongoDB**  
           MongoDB was used as the database solution to store information about vehicle maintenance shops, user profiles, and service reminders.
        
        4. **User Authentication with JWT**  
           I integrated JSON Web Tokens (JWT) for secure user authentication, allowing users to register, log in, and access personalized features such as service reminders and exclusive deals.
        
        `,
      },

      {
        title: "Solution",
        content: `The 1800AutoShop website offers a comprehensive solution for vehicle owners and service providers alike. Key features include:
        
        1. **Search and Filter for Local Auto Shops**  
           Users can easily search for nearby vehicle maintenance shops based on their location, services offered, and user reviews.
        
        2. **Vehicle Registration and Service Reminders**  
           Once users register their vehicles on the platform, they receive automatic reminders for upcoming maintenance, ensuring their cars stay in optimal condition.
        
        3. **Seamless Appointment Scheduling**  
           Users can schedule appointments directly through the website, streamlining the process of getting their vehicle serviced.
        
        4. **Exclusive Deals and Offers**  
           The platform offers a wide range of discounts and exclusive deals from local auto shops, helping users save money on services.
        
        5. **Informational Resources**  
           Users have access to valuable resources related to vehicle care, such as tips on maintaining their cars, seasonal maintenance checklists, and news about the latest automotive industry trends.`,
      },

      {
        title: "Technologies Used",
        content: `The following technologies were used to build the 1800AutoShop website:
        
        - **React**  
          For building the interactive front-end and ensuring a seamless user experience.
        
        - **Node.js**  
          To handle back-end logic and API interactions with car service providers.`,
      },

      {
        title: "Conclusion",
        content: `The 1800AutoShop website has successfully streamlined the process of finding and scheduling vehicle maintenance services. By offering features like service reminders, real-time appointment scheduling, and exclusive deals, the platform enhances the user experience, making it easier for vehicle owners to keep their cars in top condition. Additionally, the integration with local service providers creates a convenient marketplace for both users and auto shops, making vehicle maintenance more accessible and efficient. This project demonstrates my ability to create scalable, user-focused platforms that meet both functional and business needs.`,
      },
    ],
  },

  {
    title: "TheWickedMonarch",
    subtitle: "Web App",
    image: Corr,
    cardData: [
      {
        title: "Project Overview",
        content: `The Wicked Monarch (TWM) is an exciting, comic-based NFT Play-to-Earn game built on the WAX blockchain network. The game blends elements of mystery, comic storytelling, and blockchain technology to create a unique and engaging experience for players. In this project, my role as a full-stack developer was to design and implement a web platform that integrates with the game’s NFT features, enabling users to engage with the game, purchase NFTs, and track their in-game progress.`,
      },
      {
        title: "Challenges",
        content: `1. **Blockchain Integration Complexity**: The need to ensure that all interactions with the WAX blockchain were secure, reliable, and easy for players to navigate was a significant challenge.
        
        2. **Scalability of NFT Transactions**: Handling large volumes of transactions within the game, such as minting, buying, and selling NFTs, required optimizing the platform for speed and reliability.
        
       `,
      },
    
      {
        title: "Approach",
        content: `1. **WAX Blockchain Integration**: Used the WAX blockchain’s API to enable NFT transactions and ensure a smooth integration with the game’s backend. This allowed users to mint, buy, sell, and trade in-game assets in the form of NFTs.
        
        2. **NFT Marketplace Development**: Built a decentralized NFT marketplace using blockchain technology, enabling users to interact with their assets. The marketplace also supported real-time updates on transactions.
        
        3. **Play-to-Earn Mechanism**: Integrated the Play-to-Earn system by ensuring that in-game achievements, rewards, and collectibles were securely stored and tradable as NFTs on the WAX blockchain.
        
        4. **Responsive and Intuitive UI**: Designed a user-friendly web interface that makes interacting with the blockchain as easy as possible. The goal was to allow even users with limited blockchain knowledge to enjoy the platform without confusion.
        
        5. **Secure Authentication System**: Developed a secure login system that allows users to connect their WAX wallet and authenticate their identity. This ensures only verified users could access their NFT assets and participate in transactions.`,
      },
    
      {
        title: "Solution",
        content: `The Wicked Monarch website successfully blends a dynamic NFT marketplace with blockchain integration, offering a streamlined, easy-to-navigate web platform for players to interact with their in-game NFTs. Key features include:
        
        1. **NFT Marketplace**: A platform for buying, selling, and trading NFTs, allowing users to monetize their in-game assets.
        
        2. **Play-to-Earn Model**: Players can earn rewards through gameplay, and these rewards are represented as NFTs that can be traded within the marketplace.
        
        3. **Blockchain Transactions**: Integration with the WAX blockchain ensures that all transactions are secure, transparent, and verifiable.
        
        4. **Real-Time Data Sync**: The platform automatically syncs with the game, providing users with real-time updates of their progress, rewards, and any changes to their NFT inventory.
        
        5. **Secure User Authentication**: Using WAX wallet authentication, users can securely log in and manage their assets without compromising security.`,
      },
    
      {
        title: "Technologies Used",
        content: `1. **React.js**: Used for building the interactive frontend, providing a dynamic and responsive user experience.
        
        2. **WAX Blockchain**: Integrated the WAX blockchain for minting, buying, and selling NFTs, leveraging its secure and efficient system.
        
        3. **IPFS (Interplanetary File System)**: Used for decentralized storage of NFT assets, ensuring that game-related content is available globally and securely.
        
       `,
      },
    
      {
        title: "Conclusion",
        content: `The Wicked Monarch web platform successfully created a new and engaging way for players to interact with NFTs and blockchain technology in a gaming context. By integrating a seamless Play-to-Earn experience with the WAX blockchain, the platform not only provides an enjoyable gaming experience but also empowers players to collect and trade digital assets. The solution effectively addressed the technical challenges of blockchain integration, UX design, and scalability, providing a robust platform that will continue to grow as the game evolves.`,
      },
    ],
    
  },
  {
    title: "PawpackJP",
    subtitle: "WEB APP",
    image: Pawdog,
    cardData: [
      {
        title: "Project Overview",
        content: `PawPack is an innovative online platform designed to cater to the nutritional and recreational needs of dogs and other pets. The website was developed with a strong focus on delivering convenience and high-quality products for pet owners. PawPack offers an intuitive, user-friendly experience, featuring a diverse range of premium pet food and toys, with the added benefit of customizable subscription plans that are tailored to meet the unique dietary requirements of pets. This platform ensures that pet owners can easily order and manage their pet care needs, all from the comfort of their homes.`,
      },
    
     
    
      {
        title: "Challenges",
        content: `1. **Customizable Subscription System**: Developing a flexible subscription model that allows users to choose different durations and receive tailored product shipments on time.
        
        2. **Product Information Management**: Effectively organizing and displaying detailed nutritional information, ingredients, and product benefits for each pet food item.
        
        3. **Payment Security**: Ensuring that all financial transactions are secure and that sensitive customer information is protected.
        
       `,
      },
    
      {
        title: "Approach",
        content: `1. **Subscription System Development**: Built a robust subscription feature allowing users to easily choose between monthly, quarterly, and yearly packages. Integrated a flexible scheduling system that ensures timely deliveries of products, with options to modify or cancel subscriptions at any time.
        
        2. **Secure Payment Gateway Integration**: Integrated a secure payment gateway using Stripe to handle subscription payments and one-time purchases, ensuring encrypted transactions and user data protection.
        
        3. **Product Display & Categorization**: Designed a clean, easy-to-navigate product catalog that includes detailed information on each item, including nutritional facts for pet food, customer reviews, and usage tips.
        
        4. **Personalization Engine**: Incorporated a recommendation system using machine learning to offer personalized suggestions based on user behavior, pet type, and preferences.
        
        5. **Mobile Optimization**: Ensured the platform is fully responsive and optimized for mobile devices, allowing users to shop and manage subscriptions seamlessly on smartphones and tablets.
        
        6. **Admin Dashboard**: Developed an intuitive admin panel for easy management of products, orders, subscriptions, and customer data, streamlining the process for the business side of the platform.`,
      },
    
      {
        title: "Solution",
        content: `The PawPack website provides pet owners with a seamless shopping experience for high-quality pet food and toys, with customizable subscription options for recurring deliveries. The key features of the platform include:
        
        1. **Flexible Subscription Plans**: Customers can select a subscription package that fits their needs, ensuring convenience for regular deliveries of pet food and toys.
        
        2. **Secure Payment Integration**: With the implementation of secure payment methods, users can confidently make purchases and manage subscriptions online.
        
        3. **Comprehensive Product Information**: Detailed product pages provide customers with all the information they need to make informed decisions about their pets' nutrition and recreational needs.
        
        4. **Personalized Experience**: The platform’s recommendation system helps customers find the best products based on their pets’ unique needs.
        
        5. **User Account Management**: Pet owners can create and manage accounts to track orders, update subscription preferences, and manage payment details.
        
        6. **Responsive Design**: PawPack is optimized for all devices, ensuring a smooth shopping experience across desktop, tablet, and mobile platforms.`,
      },
    
      {
        title: "Technologies Used",
        content: `1. **React.js**: Used to build a responsive and dynamic frontend for a seamless user experience across all devices.
        
        2. **Node.js & Express.js**: Used to build the backend, ensuring scalability, security, and smooth communication with the database.
        
        3. **MongoDB**: Used for storing customer data, orders, subscriptions, and product information, providing scalability and flexibility.
        
       `,
      },
    
      {
        title: "Conclusion",
        content: `The PawPack website successfully meets its objectives by providing pet owners with an easy-to-use platform to purchase high-quality food and toys for their pets. The customizable subscription plans ensure that pet owners can manage their pets' needs on their terms, while the secure payment integration and personalized experience make the entire process convenient and seamless. With a focus on user experience and security, PawPack is poised to become a go-to platform for pet owners who want to simplify the process of maintaining their pets’ nutritional and recreational needs.`,
      },
    ]
    
  },
  {
    title: "Momekz",
    subtitle: "Web App",
    image: Momekz,
     cardData: [
      {
        title: "Project Overview",
        content: `The MomeKZ Web App is a feature-rich vendor dashboard crafted to optimize vendor operations by offering centralized tools for order tracking, inventory updates, and seamless communication. Designed with the needs of vendors in mind, the platform enables users to streamline their workflow, monitor real-time business metrics, and improve operational transparency. From managing staff and branches to tracking sales and purchases, the app serves as a one-stop solution for efficient business management.`,
      },
     
      {
        title: "Challenges",
        content: `1. **Diverse Functionalities**: Integrating varied features like inventory management, sales tracking, and staff assignments into a cohesive platform.
        
        2. **User Experience**: Ensuring the interface is intuitive and accessible, even for users with minimal technical expertise.
        
        3. **Data Security**: Protecting sensitive business data with robust security measures.
        
       `,
      },
      {
        title: "Approach",
        content: `To overcome these challenges, a structured and user-focused approach was adopted:
        
        1. **Tabular Structure**: Organized the platform into clearly defined sections such as Dashboard, Sales Management, and Inventory, ensuring seamless navigation.
        
        2. **Advanced Backend Architecture**: Used modern backend technologies to enable real-time updates and reliable data management.
        
        3. **User-Centric Design**: Focused on simplicity and accessibility, ensuring that users can efficiently interact with all features.
        
        4. **Data Protection Protocols**: Implemented encryption and secure authentication mechanisms to safeguard sensitive information.`,
      },
      {
        title: "Solution",
        content: `The MomeKZ Web App includes an array of robust features tailored for effective vendor management:
        
        1. **Dashboard**: Offers an intuitive overview of sales performance, inventory levels, and other key metrics.
        
        2. **Branches & Staff Management**: Enables vendors to assign roles, monitor branch activities, and manage staff workflows.
        
        3. **Products & Inventory**: Supports adding and managing products, tracking stock levels, and creating bundled products to optimize inventory control.
        
        4. **Sales Management**: Provides tools to track store sales, online orders, and returns, with an easy interface for adding and managing sales.
        
       `,
      },
      {
        title: "Technologies Used",
        content: `1. **ReactJS**: Ensures a dynamic, responsive, and interactive user interface.
        
        2. **Node.js**: Powers backend functionalities, enabling real-time data processing.
        
        3. **MongoDB**: Provides scalable and secure data storage solutions.
        
        4. **Socket.IO**: Supports instant communication between users and real-time data updates.
        
       `,
      },
      {
        title: "Conclusion",
        content: `The MomeKZ Web App redefines vendor management by offering an all-in-one platform that is both powerful and easy to use. With its extensive suite of features, it enables vendors to focus on growth by automating routine tasks, improving workflow visibility, and fostering collaboration. Designed to evolve with business needs, the MomeKZ Web App stands as a reliable partner for efficient and scalable vendor operations.`,
      },
    ]
    
    
  },
  {
    title: "Plspeak",
    subtitle: "Web App",
    image: Plspeak,
    cardData: [
      {
        title: "Project Overview",
        content: `PLSPEAK is an innovative Web3.0 social platform designed for the crypto space, empowering users to engage in discussions, trade, and predict outcomes on a wide range of topics including politics, cryptocurrency trends, sports, and global events. As a cutting-edge platform, PLSPEAK allows users to build portfolios based on their forecasts, offering the opportunity to earn returns when their predictions are accurate. The platform seamlessly integrates social media functionalities, a dynamic marketplace for trading, and a liquidity pool that enables users to buy and sell assets. The technology stack, including Hardhat, Smart Contracts, Chainlink, React, Node.js, and SocketIO, ensures a secure and interactive experience, while also driving user engagement and decentralized interaction.`,
      },
    
      {
        title: "Challenges",
        content: `1. **Creating a Secure Prediction Market**: Ensuring the integrity of user predictions and the overall marketplace by implementing secure, transparent, and tamper-proof smart contracts.
        
        2. **User Engagement**: Encouraging active participation from users in predictions, discussions, and market trading while maintaining a user-friendly interface.
        
        3. **Liquidity Pool Management**: Developing a robust liquidity pool system that allows users to easily trade and liquidate their assets while maintaining market stability.
        
       `,
      },
      {
        title: "Approach",
        content: `1. **Smart Contracts Development**: Leveraged the Hardhat framework and Chainlink to develop decentralized, secure smart contracts that facilitate prediction-based trading, portfolio management, and returns calculation. This ensured a secure and transparent experience for users.
        
        2. **User Interface Design**: Built a sleek and intuitive interface using React.js to ensure a seamless user experience for navigating through predictions, discussions, and portfolios. The platform is responsive, providing an optimal experience on both desktop and mobile devices.
        
        3. **Real-Time Interaction**: Integrated SocketIO to enable real-time updates on predictions, market trends, and social interactions, fostering an engaging, interactive community.
        
        4. **Decentralized Social Features**: Developed features that enable users to share their predictions, track performance, and participate in discussions without compromising security, ensuring that all interactions are stored on the blockchain.
        
        5. **Trading and Liquidity Pool**: Built a dynamic marketplace for buying and selling predictions, ensuring that liquidity is available at all times and that users can easily trade their positions with minimal friction.`,
      },
      {
        title: "Solution",
        content: `PLSPEAK serves as a unique Web3.0 platform that combines prediction trading with social media functionalities. The platform allows users to:
        
        1. **Trade Predictions**: Users can make predictions on various topics and build portfolios based on their forecasts. If the predictions are correct, users earn returns.
        
        2. **Social Media Integration**: Engage in discussions, share insights, and interact with other users, fostering a community driven by shared interests in global events and trends.
        
        3. **Liquidity Pool for Trading**: Facilitates buying and selling of prediction positions with a secure and decentralized trading system.
        
        4. **Smart Contract-Driven Platform**: Transactions are handled by smart contracts, ensuring transparency, security, and automation.
        
        5. **Real-Time Updates**: The platform provides real-time updates on predictions, discussions, and market trends, enabling users to stay informed and react to new developments quickly.`,
      },
      {
        title: "Technologies Used",
        content: `1. **Hardhat**: Used for developing and testing Ethereum-based smart contracts that manage user predictions and portfolio interactions.
        
        2. **Chainlink**: Integrated for secure and reliable off-chain data feeds, ensuring that prediction markets are based on accurate, real-time data.
        
        3. **React.js**: Frontend framework used to build a responsive and interactive user interface for managing predictions, portfolios, and social interactions.
        
       `,
      },
      {
        title: "Conclusion",
        content: `PLSPEAK has successfully established itself as a pioneering Web3.0 social platform that blends crypto prediction trading with social media features. By leveraging blockchain technology, smart contracts, and decentralized data, PLSPEAK offers a secure, transparent, and user-driven platform for engaging with global events and trends. The platform empowers users to make informed predictions, build portfolios, and earn returns while interacting with a vibrant community. The integration of real-time features, decentralized trading, and secure smart contracts makes PLSPEAK a unique and forward-thinking addition to the crypto space, setting the stage for a new era of decentralized social platforms.`,
      },
    ]
    
  },
  {
    title: "Mahlolah​",
    subtitle: "Web App",
    image: Mahalola,
    cardData: [
      {
        title: "Project Overview",
        content: `Mahlolah is an innovative online platform designed to streamline payment processing and enhance customer interactions through real-time chat support. The platform facilitates secure and efficient transactions between businesses and their customers, offering seamless integration of payment solutions and live communication channels. As a full-stack developer on this project, I was responsible for designing and implementing the payment system, integrating chat support, and ensuring a smooth, secure user experience.`,
      },
    
     
    
      {
        title: "Challenges",
        content: `1. **Security of Transactions**: Ensuring secure payment processing and protecting sensitive data from breaches posed a significant challenge in developing a robust platform.
        
        2. **Real-Time Communication**: Implementing real-time chat support that could handle multiple concurrent users without lag or performance issues.
        
        3. **User Experience**: Designing an intuitive user interface that seamlessly integrates payment options and live chat, ensuring users could navigate easily without confusion.
        
       `,
      },
    
      {
        title: "Approach",
        content: `1. **Payment Gateway Integration**: Integrated third-party payment gateways such as Stripe and PayPal to ensure smooth and secure transactions. This integration also enabled support for multiple payment methods, including debit/credit cards and e-wallets.
        
        2. **Real-Time Chat System**: Built a scalable real-time chat system using WebSocket technology, allowing instant communication between businesses and customers without delays.
        
        3. **User Authentication & Data Encryption**: Implemented OAuth 2.0 for secure user authentication and encrypted all transactions using SSL/TLS protocols to protect sensitive financial data.
        
        4. **Mobile Responsiveness**: Leveraged responsive web design principles to ensure that Mahlolah was fully optimized for mobile devices, offering a seamless experience across desktop and mobile platforms.
        
        5. **Testing & Optimization**: Conducted extensive load testing to ensure the platform could handle high traffic and transactions. Optimized both frontend and backend performance to provide a smooth, lag-free experience.`,
      },
    
      {
        title: "Solution",
        content: `Mahlolah successfully integrates a user-friendly, secure payment processing system with real-time chat support, ensuring businesses and customers can conduct transactions and communicate efficiently. Key features include:
        
        1. **Multiple Payment Methods**: Integrated payment options like credit cards, PayPal, and digital wallets for convenient transactions.
        
        2. **Real-Time Chat Support**: Implemented live chat to enhance customer support, enabling businesses to respond instantly to queries and issues.
        
        3. **Secure Transactions**: Payment processing is secured with SSL encryption, and all sensitive information is protected through secure protocols.
        
        4. **Mobile Optimization**: The platform is fully responsive, allowing users to manage payments and engage in real-time chats seamlessly across devices.
        
        5. **User Authentication**: Secure user login and registration with encrypted data storage ensure users' privacy and safety while using the platform.`,
      },
    
      {
        title: "Technologies Used",
        content: `1. **React.js**: For building the interactive and responsive frontend of the platform.
        
        2. **Node.js**: Used for handling backend operations, including payment processing and chat support functionalities.
        
        3. **WebSocket**: Implemented to support real-time communication for the chat feature, enabling instant, bidirectional communication between users and businesses.
        
       `,
      },
    
      {
        title: "Conclusion",
        content: `Mahlolah has successfully created a seamless platform that combines secure payment processing with real-time communication to enhance customer-business interactions. The platform’s focus on security, mobile responsiveness, and ease of use has made it a valuable tool for businesses seeking to provide a smooth and secure transaction experience for their customers. By addressing both technical and user experience challenges, Mahlolah offers a reliable and efficient solution for online payments and customer support, ensuring businesses can operate smoothly and securely.`,
      },
    ]
  },
];

const Portfolio = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box sx={{ marginTop: { xs: 3, md: 7 } }}>
      <Container>
        <Grid container spacing={3} mb={10}>
          <Grid item xs={12} md={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack
                  direction={"row"}
                  width={"100%"}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  spacing={2}
                >
                  <Box
                    component="img"
                    src="https://hamzajanjua.com/wp-content/uploads/2023/12/star-2.png.webp"
                    alt="SVG Example"
                    height="30px"
                    sx={{ borderRadius: 2 }}
                  />
                  <Stack>
                    <Typography
                      sx={{
                        color: "#ffff",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        lineHeight: "1.2em",
                        textAlign: "start",
                      }}
                    >
                      DISCOVER MY
                    </Typography>
                    <Typography
                      sx={{
                        color: "#ffff",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "20px",

                        fontWeight: 600,
                        textTransform: "uppercase",
                        lineHeight: "1.2em",
                        letterSpacing: "-1px",
                        textAlign: "start",
                        width: "100%",
                      }}
                    >
                      Digital Playground
                    </Typography>
                  </Stack>
                  <Box
                    component="img"
                    src="https://hamzajanjua.com/wp-content/uploads/2023/12/star-2.png.webp"
                    alt="SVG Example"
                    height="30px"
                    sx={{ borderRadius: 2 }}
                  />
                </Stack>
              </Grid>
              {cardData.map((card, index) => (
                <Grid
                  item
                  xs={12}
                  key={index}
                  sx={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate("/portfolio-detail", { state: { card } })
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.6 }}
                  >
                    <Card
                      sx={{
                        maxWidth: "100%",
                        height: { xs: "300px", md: "300px" },
                        backgroundColor: "rgba(76, 86, 111, 0.5)", 
                        backdropFilter: "blur(1px)",

                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "#4C566F",
                        padding: 2,
                        borderRadius: 7,
                      }}
                    >
                      <Stack
                        direction={"row"}
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="300px"
                          image={card.image}
                          alt={card.title}
                          sx={{
                            borderRadius: 2,
                            objectFit: "contain",
                            width: "100%",
                          }}
                        />

                        <CardContent>
                          <Stack mt={2}>
                            <Typography
                              variant="body2"
                              sx={{
                                textTransform: "uppercase",
                                color: "#BCBCBC80",
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "12px", md: "14px" },
                                fontWeight: 500,
                                lineHeight: "1.2em",
                                textAlign: "start",
                              }}
                            >
                              {card.subtitle}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h5"
                              sx={{
                                color: "#ffff",
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "18px", md: "22px" },
                                fontWeight: 500,
                                textAlign: "start",
                              }}
                            >
                              {card.title}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={8}>
            <Stack
              direction={"row"}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              spacing={2}
            >
              <Box
                component="img"
                src="https://hamzajanjua.com/wp-content/uploads/2023/12/star-2.png.webp"
                alt="SVG Example"
                height="30px"
                sx={{ borderRadius: 2 }}
              />
              <Stack>
                <Typography
                  sx={{
                    color: "#ffff",
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "40px", md: "60px" },
                    fontWeight: 600,
                    textTransform: "uppercase",
                    lineHeight: "1.2em",
                    letterSpacing: "-1px",
                    textAlign: "start",
                  }}
                >
                  DISCOVER MY
                </Typography>
                <Typography
                  sx={{
                    color: "#ffff",
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "40px", md: "60px" },
                    fontWeight: 600,
                    textTransform: "uppercase",
                    lineHeight: "1.2em",
                    letterSpacing: "-1px",
                    textAlign: "start",
                  }}
                >
                  Digital Playground
                </Typography>
              </Stack>
              <Box
                component="img"
                src="https://hamzajanjua.com/wp-content/uploads/2023/12/star-2.png.webp"
                alt="SVG Example"
                height="30px"
                sx={{ borderRadius: 2 }}
              />
            </Stack>

            <Grid container spacing={3}>
              {cardData1.map((card, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={index}
                  sx={{ cursor: "pointer" }}
                  onClick={() =>
                    navigate("/portfolio-detail", { state: { card } })
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.6 }}
                  >
                    <Card
                      sx={{
                        maxWidth: "100%",
                        height: { xs: "300px", md: "300px" },
                        backgroundColor: "rgba(76, 86, 111, 0.5)", 
                        backdropFilter: "blur(1px)",
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "#4C566F",
                        padding: 2,
                        borderRadius: 7,
                      }}
                    >
                      <Stack>
                        <CardMedia
                          component="img"
                          height="200px"
                          image={card.image}
                          alt={card.title}
                          sx={{ borderRadius: 2 }}
                        />
                        <CardContent>
                          <Stack mt={2}>
                            <Typography
                              variant="body2"
                              sx={{
                                textTransform: "uppercase",
                                color: "#BCBCBC80",
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "12px", md: "14px" },
                                fontWeight: 500,
                                lineHeight: "1.2em",
                                textAlign: "start",
                              }}
                            >
                              {card.subtitle}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h5"
                              sx={{
                                color: "#ffff",
                                fontFamily: "Inter, sans-serif",
                                fontSize: { xs: "18px", md: "22px" },
                                fontWeight: 500,
                                textAlign: "start",
                              }}
                            >
                              {card.title}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Stack>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;
