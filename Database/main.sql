-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2025 at 01:34 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `main`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `admin_name` varchar(100) DEFAULT NULL,
  `admin_email` varchar(255) DEFAULT NULL,
  `admin_password` varchar(255) DEFAULT NULL,
  `admin_phone` varchar(15) DEFAULT NULL,
  `admin_status` tinyint(1) DEFAULT 1,
  `role` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_email`, `admin_password`, `admin_phone`, `admin_status`, `role`, `created_at`, `updated_at`) VALUES
(1, 'Parth chohala', 'parth@gmail.com', '20913809183', '9090909090', 1, 1, '2025-02-14 11:10:50', '2025-03-06 13:32:36'),
(2, 'Parthiv harshbhai Patel', 'patel0990@gmail.com', 'jdoiasfn90', '8989890089', 0, 1, '2025-02-14 11:10:50', '2025-03-06 10:58:41'),
(4, 'newadmin9090', 'newadmin90@gmail.com', 'jdoiasjdkvbsdjksfn90', '9088990011', 1, 1, '2025-02-17 10:54:17', '2025-03-05 11:37:40'),
(5, 'new_admin', 'dfgdg@gmail.com', 'ksdjbsdjkb', '9090999090', 0, 1, '2025-03-03 11:10:03', '2025-03-03 11:20:38');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) DEFAULT 1,
  `added_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `customer_id`, `product_id`, `quantity`, `added_at`) VALUES
(12, 2, 2, 2, '2025-02-01 18:30:00'),
(14, 4, 4, 2, '2025-02-03 18:30:00'),
(17, 7, 7, 3, '2025-02-06 18:30:00'),
(18, 8, 8, 1, '2025-02-07 18:30:00'),
(19, 9, 9, 2, '2025-02-08 18:30:00'),
(20, 10, 10, 1, '2025-02-09 18:30:00'),
(22, 2, 2, 2, '2025-02-01 18:30:00'),
(24, 4, 4, 2, '2025-02-03 18:30:00'),
(27, 7, 7, 3, '2025-02-06 18:30:00'),
(28, 8, 8, 1, '2025-02-07 18:30:00'),
(29, 9, 9, 2, '2025-02-08 18:30:00'),
(30, 10, 10, 1, '2025-02-09 18:30:00'),
(33, 0, 1, NULL, '2025-02-27 11:05:14');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `category_image` text NOT NULL,
  `category_status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `name`, `description`, `category_image`, `category_status`) VALUES
(1, 'Make up', 'for make up items', 'category_image-1741267358068Screenshot 2023-07-29 200454.png', 0),
(2, 'Devices', 'category for devices', 'category_image-1741267313981logic.png', 0),
(3, 'cream', 'category for creams', 'category_image-1741268098167Kyojuro Rengoku and Tengen Uzui.png', 0),
(4, 'Make-up', 'just make up products', 'category_image-1741267742867Screenshot 2024-03-09 151242.png', 0),
(5, 'newcat1', 'Categosdfgsdry for new', 'category_image-1741267730550Screenshot 2023-05-31 175147.png', 0),
(6, 'new_cat', 'sdkbjlsbca;ksbcakbscajkb', 'category_image-1741267718924Screenshot 2023-10-11 181237.png', 0),
(7, 'Machines', 'machines cateory', 'category_image-17416028616085.jpg', 0),
(8, 'Furniture', 'Furniture category', 'category_image-174160931895347438.png', 0),
(9, 'my cat', 'my new cat', 'category_image-1741266857953Screenshot 2023-03-19 195158.png', 0),
(10, 'Electronics', 'Discover the latest in electronics including smartphones, laptops, smartwatches, and cutting-edge gadgets to make your life easier and more connected.', 'category_image-1742813223680Electronics_category.webp', 1),
(11, 'Fashion', 'Explore a wide range of trendy and stylish fashion collections for men, women, and kids, including apparel, footwear, and accessories.', 'category_image-1742813246214fasion_category.webp', 1),
(12, 'Books', 'Dive into the world of literature with a vast collection of novels, educational books, self-help guides, and children\'s stories.', 'category_image-1742813265785Books_category.webp', 1),
(13, 'Home Appliances', 'Upgrade your home with modern appliances including refrigerators, washing machines, microwaves, and smart kitchen gadgets for every need.', 'category_image-1742813283691Home Appliances_category.webp', 1),
(14, 'Sports', 'Get top-quality sports gear and equipment including gym essentials, outdoor sports items, fitness accessories, and more to stay active and healthy.', 'category_image-1742813297636sports_category.webp', 1),
(15, 'Toys', 'Find a delightful collection of toys and games for kids of all ages, including educational toys, action figures, dolls, and creative playsets.', 'category_image-1742813311674toy_category.webp', 1),
(16, 'Beauty', 'Shop for premium beauty and personal care products including skincare, makeup, haircare, and wellness essentials for a radiant look.', 'category_image-1742813328686beauty_category.webp', 1),
(17, 'Furniture', 'Transform your space with our stylish and functional furniture collections including sofas, beds, dining sets, and home decor.', 'category_image-1742813358297furniture_category.webp', 1),
(18, 'Automotive', 'Browse high-quality automotive accessories and parts including seat covers, tires, tools, car cleaning kits, and more for all your vehicle needs.', 'category_image-1742813375997automobile_category.webp', 1),
(19, 'Pet Supplies', 'Everything you need for your pets including food, toys, grooming accessories, and bedding to keep them healthy and happy.', 'category_image-1742813430450pet_category.webp', 1);

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(100) DEFAULT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `customer_password` varchar(255) DEFAULT NULL,
  `customer_phone` varchar(15) DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `customer_status` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `customer_name`, `customer_email`, `customer_password`, `customer_phone`, `shipping_address`, `customer_status`, `created_at`, `updated_at`) VALUES
(1, 'John Doe', 'johndoe09@gmail.com', 'password123', '555123490', '123 Main St, City, Countryskdjbvsdjkb', 0, '2025-02-14 11:26:29', '2025-03-10 12:43:12'),
(2, 'Jane Smith', 'janesmith@gmail.com', 'mypassword', '5555678', '456 Oak St, City, Country', 1, '2025-02-14 11:26:29', '2025-03-03 12:16:03'),
(3, 'Michael Johnson', 'michaelj@gmail.com', 'securepass', '5558765', '789 Pine St, City, Country', 1, '2025-02-14 11:26:29', '2025-03-03 12:17:59'),
(4, 'Emily Davis', 'emilydavis@gmail.com', 'emilypassword', '5553456', '101 Maple St, City, Country', 1, '2025-02-14 11:26:29', '2025-03-03 12:54:25'),
(5, 'William Brown 1st', 'williambrown@gmail.com', 'willpassword', '555345', '202 Birch St, City, Country los angelis', 1, '2025-02-14 11:26:29', '2025-03-04 11:43:45'),
(6, 'Sophia Miller', 'sophiamiller@gmail.com', 'sophiapasso', '5556543', '303 Cedar St, City, Country', 1, '2025-02-14 11:26:29', '2025-03-10 13:33:59'),
(7, 'David Wilson', 'davidwilson@gmail.com', 'daviddpassword', '555-9876', '404 Walnut St, City, Country', 0, '2025-02-14 11:26:29', NULL),
(8, 'Olivia Moore', 'oliviamoore@gmail.com', 'oliviapassword', '555-4567', '505 Cherry St, City, Country', 0, '2025-02-14 11:26:29', NULL),
(9, 'James Taylor', 'jamestaylor@gmail.com', 'jamespassword', '555-7654', '606 Ash St, City, Country', 0, '2025-02-14 11:26:29', NULL),
(10, 'Isabella Anderson', 'isabellaanderson@gmail.com', 'isabellapass', '555-1122', '707 Elm St, City, Country', 0, '2025-02-14 11:26:29', NULL),
(25, 'Parthiv harshbhai Patel', 'patel0990@gmail.com', '9090909090', '9089788989', 'oasdbjksbkzx bznmx ,idvbsdjhi bsd jksb,9709sdjkbd', 1, '2025-03-10 12:44:44', NULL),
(28, 'CHOHALA PARTH GAGJIBHAI', 'parth789@gmail.com', 'parth789', '7359559559', '1096/6 bhanvagar ', 1, '2025-03-25 12:37:38', '2025-03-26 12:46:22'),
(29, 'Aman Chavda', 'Amanchavda@gmail.com', '9909', '900909090', '123 Main St, City, Countryskdjbvsdjkb', 1, '2025-03-26 13:09:27', NULL),
(31, 'Aman Chavda', 'Amanchavda90@gmail.com', '8989', '9999999999', '123 Main St, City, Countryskdjbvsdjkb', 1, '2025-03-26 13:17:52', '2025-03-26 13:19:13'),
(32, 'Aman solanki', 'solanki@gmail.com', '0000', '9900990099', 'oasdbjksbkzx bznmx ,idvbsdjhi bsd jksb,9709sdjkbd', 1, '2025-03-26 13:21:22', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `total_amount` decimal(10,2) DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `customer_id`, `order_date`, `total_amount`, `status`, `shipping_address`) VALUES
(1, 2, '2025-01-31 18:30:00', 1220.50, 'pending', '123 Main St, City, Country'),
(2, 2, '2025-02-01 18:30:00', 85.99, 'Delivered', '456 Oak St, City, Country'),
(3, 3, '2025-02-02 18:30:00', 150.75, 'Processing', '789 Pine St, City, Country'),
(4, 4, '2025-02-03 18:30:00', 60.25, 'Shipped', '101 Maple St, City, Country'),
(5, 5, '2025-02-04 18:30:00', 220.30, 'Cancelled', '202 Birch St, City, Country'),
(6, 6, '2025-02-05 18:30:00', 89.99, 'Delivered', '303 Cedar St, City, Country'),
(7, 7, '2025-02-06 18:30:00', 135.40, 'Shipped', '404 Walnut St, City, Country'),
(8, 8, '2025-02-07 18:30:00', 100.00, 'Processing', '505 Cherry St, City, Country'),
(9, 9, '2025-02-08 18:30:00', 250.90, 'Delivered', '606 Ash St, City, Country'),
(11, 1, '2025-03-24 13:53:51', 4434.87, 'Delivered', '123 Main St, City, Countryskdjbvsdjkb'),
(12, 1, '2025-03-24 13:56:25', 1044.83, 'Delivered', '225 Main St, City, countryside, new California '),
(15, 1, '2025-03-25 10:25:00', 539.97, 'Delivered', '123 Main St, City, Countryskdjbvsdjkb'),
(16, 1, '2025-03-25 10:25:32', 539.97, 'Delivered', '123 Main St, City, Countryskdjbvsdjkb'),
(17, 1, '2025-03-25 10:33:43', 939.92, 'Delivered', '123 Main St, City, Countryskdjbvsdjkb'),
(18, 1, '2025-03-25 10:34:33', 189.96, 'Delivered', '123 Main St, City, Countryskdjbvsdjkb'),
(19, 1, '2025-03-26 11:16:00', 1859.95, 'Delivered', '123 Main St, City, Countryskdjbvsdjkb'),
(20, 1, '2025-03-26 13:54:40', 1629.98, 'Delivered', '123 Main St, City, Countryskdjbvsdjkb'),
(21, 28, '2025-03-26 13:57:06', 2654.93, 'Delivered', '1096/6 bhanvagar '),
(22, 32, '2025-03-26 13:59:33', 664.95, 'Delivered', 'oasdbjksbkzx bznmx ,idvbsdjhi bsd jksb,9709sdjkbd');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `order_item_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`order_item_id`, `order_id`, `product_id`, `quantity`, `price`) VALUES
(11, 1, 1, 2, 30.00),
(12, 1, 2, 1, 60.50),
(14, 3, 4, 1, 45.00),
(17, 6, 7, 1, 89.99),
(18, 7, 8, 3, 45.00),
(19, 8, 9, 2, 50.00),
(20, 9, 10, 1, 250.90),
(22, 11, 74, 2, 1499.99),
(23, 11, 132, 5, 89.99),
(24, 11, 96, 1, 24.99),
(25, 11, 151, 1, 189.99),
(26, 11, 123, 1, 249.99),
(27, 11, 150, 1, 249.99),
(28, 11, 149, 1, 179.99),
(29, 11, 70, 1, 89.99),
(30, 12, 80, 1, 39.99),
(31, 12, 150, 1, 249.99),
(32, 12, 127, 1, 199.99),
(33, 12, 70, 1, 89.99),
(34, 12, 114, 10, 24.99),
(35, 12, 110, 2, 89.99),
(36, 12, 117, 1, 34.99),
(37, 15, 80, 1, 39.99),
(38, 15, 150, 1, 249.99),
(39, 15, 123, 1, 249.99),
(40, 16, 80, 1, 39.99),
(41, 16, 150, 1, 249.99),
(42, 16, 123, 1, 249.99),
(43, 17, 122, 4, 129.99),
(44, 17, 142, 1, 149.99),
(45, 17, 132, 3, 89.99),
(46, 18, 70, 1, 89.99),
(47, 18, 106, 1, 49.99),
(48, 18, 117, 1, 34.99),
(49, 18, 89, 1, 14.99),
(50, 19, 74, 1, 1499.99),
(51, 19, 132, 4, 89.99),
(52, 20, 74, 1, 1499.99),
(53, 20, 122, 1, 129.99),
(54, 21, 74, 1, 1499.99),
(55, 21, 122, 1, 129.99),
(56, 21, 123, 4, 249.99),
(57, 21, 96, 1, 24.99),
(58, 22, 122, 3, 129.99),
(59, 22, 96, 1, 24.99),
(60, 22, 75, 1, 249.99);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `product_image_main` text NOT NULL,
  `product_images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`product_images`)),
  `stock_quantity` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `product_status` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `price`, `product_image_main`, `product_images`, `stock_quantity`, `category_id`, `product_status`, `created_at`, `updated_at`) VALUES
(1, 'Camera', 'DSLR camera with high resolution', 900.00, 'product_image_main-1741608727200705ed1090f270ed99c90b2d312bd34bd.jpg', NULL, 60, 1, 0, '2025-02-14 11:31:10', '2025-03-12 11:40:08'),
(2, 'Camera new', 'DSLR camera with high resolution jshdbvjhsdvjh', 899.00, 'product_image_main-17417796409138c30fa9f49b950693a83ef80c6cf0562.jpg', NULL, 89, 2, 0, '2025-02-14 11:31:10', '2025-03-12 11:40:40'),
(4, 'TV new', '4K Ultra HD television good qualitykjbvzxjksdjkbvjkdbvjkbcvjkdbsldkvnskldvskl', 9000.00, '', NULL, 90, 2, 0, '2025-02-14 11:31:10', '2025-03-13 10:27:42'),
(7, 'Camera', 'DSLR camera with high resolution', 900.00, 'product_image_main-1741609261363705ed1090f270ed99c90b2d312bd34bd.jpg', NULL, 60, 3, 0, '2025-02-14 11:31:10', '2025-03-10 12:21:10'),
(8, 'Tablet', '10-inch tablet with stylus support', 250.00, '', NULL, 120, 2, 0, '2025-02-14 11:31:10', '2025-02-14 11:31:10'),
(9, 'Printer ', 'Wireless inkjet printer ', 130.00, 'product_image_main-1741609994129main-qimg-2a4a8e3d044f600ee90de96a8ca36744-lq.jfif', '[\"product_images-1741609994129f2e4ab8892e8cfb5ff2c68fa6bc9dc18.jpg\",\"product_images-1741609994130f5256f22b9dea5d4eb80c41f91f87793.jpg\",\"product_images-1741609994131Free-download-Dark-Anime-Wallpaper-4K-HD.jpg\"]', 75, 5, 0, '2025-02-14 11:31:10', '2025-03-13 10:27:48'),
(10, 'Speakers new', 'Bluetooth speakers with deep bass skdjvbsdj', 800.00, 'product_image_main-1741779597085OIP (87).jpeg', NULL, 1801, 2, 0, '2025-02-14 11:31:10', '2025-03-12 11:39:57'),
(12, 'Smartphone', 'Latest model smartphone with excellent camera', 600.00, 'product_image_main-174161048019747438.png', NULL, 150, 2, 0, '2025-02-14 11:31:59', '2025-03-13 10:28:05'),
(13, 'Headphones', 'Noise-cancelling over-ear headphones', 150.00, '', NULL, 200, 3, 0, '2025-02-14 11:31:59', '2025-02-14 11:31:59'),
(16, 'Gaming Console', 'Next-gen gaming console with exclusive games', 400.00, 'product_image_main-1741778210591backdrop-virtual-reality-gaming-room-vr-headset-display-stand-motion-content-creator-stream_655090-1154899.jpg', NULL, 30, 10, 0, '2025-02-14 11:31:59', '2025-03-13 10:28:59'),
(58, 'Printer ', 'Wireless inkjet printer ', 130.00, 'product_image_main-1741605244280a303d305b314e9121ab3f41b55a58fee.jpg', NULL, 75, 2, 0, '2025-03-10 11:14:04', '2025-03-13 10:28:55'),
(63, 'Mouce', 'A wireless mouce', 300.00, 'product_image_main-1741605636592main-qimg-b5338bbf70aef514ae55623261bad5b2-pjlq.jfif', NULL, 100, 2, 0, '2025-03-10 11:20:36', '2025-03-13 10:28:52'),
(64, 'Charging cable', 'strong charging cable', 100.00, 'product_image_main-1741605709433undefined_Entity_Relationship_Diagram_for_AI_Study_Planner (1).png', NULL, 300, 2, 0, '2025-03-10 11:21:49', '2025-03-10 11:21:49'),
(65, 'Key board', 'wireless key board', 200.00, 'product_image_main-1741606172144492bc31ccc6988cb86f2f9b6356abdc1.png', NULL, 30, 2, 0, '2025-03-10 11:29:32', '2025-03-12 11:41:47'),
(66, 'Chair', 'a plastic chair ', 200.00, 'product_image_main-1741606711918goku-by-bosslogic-4k-on.jpg', NULL, 100, 4, 0, '2025-03-10 11:34:59', '2025-03-12 11:40:55'),
(67, 'I pod', 'i pod to listen music', 800.00, 'product_image_main-1741606750601main-qimg-2a4a8e3d044f600ee90de96a8ca36744-lq.jfif', '[\"product_images-1741613868276a303d305b314e9121ab3f41b55a58fee.jpg\",\"product_images-1741613868284anime-anime-girls-digital-art-artwork-portrait-hd-wallpaper-thumb.jpg\",\"product_images-1741613868284anime-demon-slayer-kimetsu-no-yaiba-giyuu-tomioka-hd-wallpaper-preview.jpg\"]', 20, 2, 0, '2025-03-10 11:39:10', '2025-03-13 10:28:31'),
(68, 'Phone', 'smart fone', 10000.00, 'product_image_main-1741608883486jujutsu-kaisen-anime-boys-anime-satoru-gojo-hd-wallpaper-preview.jpg', '[\"product_images-174160888348917255946.jpg\",\"product_images-174160888350420494651.jpg\",\"product_images-1741608883505a303d305b314e9121ab3f41b55a58fee.jpg\"]', 100, 2, 0, '2025-03-10 12:14:43', '2025-03-13 10:28:41'),
(69, 'Book', 'simple book', 90.00, 'product_image_main-174160896411347438.png', '[\"product_images-1741609840742HD-wallpaper-anime-jujutsu-kaisen-satoru-gojo.jpg\",\"product_images-1741609840743HD-wallpaper-itachi-uchiha-art-eyebrow-akatsuki-naruto-anime.jpg\",\"product_images-1741609840745HD-wallpaper-itachi-uchiha-monochrome-graphy-flash-graphy.jpg\"]', 20, 8, 0, '2025-03-10 12:16:04', '2025-03-13 10:28:45'),
(70, 'Bluetooth Speaker', 'High-quality portable Bluetooth speaker with deep bass, long battery life, and sleek modern design, perfect for home and outdoor use.', 89.99, 'product_image_main-1741777662049DALLÂ·E 2025-03-12 11.16.34 - A modern portable Bluetooth speaker, black, cylindrical shape, clear background, isolated, realistic, high quality product image, angled front view, n.webp', '[\"product_images-1741777662052DALLÂ·E 2025-03-12 11.16.29 - A modern portable Bluetooth speaker, black, cylindrical shape, clear background, isolated, realistic, high quality product image, top view, no backgro.webp\",\"product_images-1741777662055DALLÂ·E 2025-03-12 11.16.26 - A modern portable Bluetooth speaker, black, cylindrical shape, clear background, isolated, realistic, high quality product image, side angle view, no .webp\",\"product_images-1741777662067DALLÂ·E 2025-03-12 11.16.23 - A modern portable Bluetooth speaker, black, cylindrical shape, clear background, isolated, realistic, high quality product image, front view, no backg.webp\"]', 120, 10, 1, '2025-03-12 05:47:36', '2025-03-12 11:07:42'),
(71, 'Smart LED TV', 'Experience crystal-clear visuals with our 55-inch Smart LED TV, featuring 4K resolution, built-in apps, and sleek design for modern living spaces.', 499.99, 'product_image_main-1741778891237DALLÂ·E 2025-03-12 11.16.12 - A modern Smart LED TV with clear background, isolated, realistic, high quality product image, front view, black sleek design, no background clutter.webp', '[\"product_images-1741778891238DALLÂ·E 2025-03-12 11.16.07 - A modern Smart LED TV with clear background, isolated, realistic, high quality product image, side angle, thin design, no background clutter.webp\",\"product_images-1741778891243DALLÂ·E 2025-03-12 11.15.58 - A modern Smart LED TV with clear background, isolated, realistic, high quality product image, angled front view, sleek design, no background clutter.webp\",\"product_images-1741778891260DALLÂ·E 2025-03-12 11.15.51 - A modern Smart LED TV with clear background, isolated, realistic, high quality product image, rear view showing back panel and ports, no background cl.webp\"]', 50, 10, 1, '2025-03-12 05:47:36', '2025-03-12 11:28:11'),
(72, 'Wireless Earbuds', 'Compact and high-quality wireless earbuds with charging case, featuring noise cancellation, long battery life, and crystal-clear sound.', 129.99, 'product_image_main-1741779321514DALLÂ·E 2025-03-12 11.17.50 - A pair of modern wireless earbuds with charging case, white color, clear background, isolated, realistic, high quality product image, angled front vie.webp', '[\"product_images-1741779321514DALLÂ·E 2025-03-12 11.17.48 - A pair of modern wireless earbuds with charging case, white color, clear background, isolated, realistic, high quality product image, top view, no bac.webp\",\"product_images-1741779321517DALLÂ·E 2025-03-12 11.17.46 - A pair of modern wireless earbuds with charging case, white color, clear background, isolated, realistic, high quality product image, side angle view,.webp\",\"product_images-1741779321522DALLÂ·E 2025-03-12 11.17.43 - A pair of modern wireless earbuds with charging case, white color, clear background, isolated, realistic, high quality product image, front view, no b.webp\"]', 150, 10, 1, '2025-03-12 05:48:44', '2025-03-12 11:35:21'),
(73, 'DSLR Camera', 'Professional DSLR camera with high-resolution lens, perfect for photography enthusiasts and professionals. Comes with advanced features and durable design.', 749.99, 'product_image_main-1741778088507DALLÂ·E 2025-03-12 11.18.49 - A modern DSLR camera, black color, professional look, clear background, isolated, realistic, high quality product image, front view, no background clu.webp', '[\"product_images-1741778088518DALLÂ·E 2025-03-12 11.18.52 - A modern DSLR camera, black color, professional look, clear background, isolated, realistic, high quality product image, side angle view, no backgroun.webp\"]', 60, 10, 1, '2025-03-12 05:53:49', '2025-03-12 11:14:48'),
(74, 'Gaming Laptop', 'High-performance gaming laptop equipped with the latest GPU and RGB backlit keyboard, designed for smooth and immersive gaming experiences. Sleek and powerful with advanced cooling system.', 1499.99, 'product_image_main-1741778315775Gaming Laptop with a clear background, no other objects.png', '[\"product_images-1741778315777Gaming Laptop with a clear background, no other objects (2).png\",\"product_images-1741778315788Gaming Laptop with a clear background, no other objects (1).png\"]', 40, 10, 1, '2025-03-12 05:53:50', '2025-03-12 11:18:35'),
(75, 'Men\'s Leather Jacket', 'Stylish men\'s leather jacket made with premium material, perfect for winter and casual wear. Comfortable fit and modern look.', 249.99, 'product_image_main-1741778438266Mens Leather Jacket (3).png', '[\"product_images-1741778455928Mens Leather Jacket (2).png\",\"product_images-1741778455931Mens Leather Jacket (1).png\",\"product_images-1741778455933Mens Leather Jacket.png\"]', 80, 11, 1, '2025-03-12 05:53:52', '2025-03-12 11:20:55'),
(76, 'Women\'s Handbag', 'Elegant women\'s handbag with spacious compartments and durable straps. Perfect accessory for daily and party wear.', 149.99, 'product_image_main-1741779389007Elegant womens handbag with spacious compartments and durable straps (4).png', '[\"product_images-1741779389011Elegant womens handbag with spacious compartments and durable straps (3).png\",\"product_images-1741779389015Elegant womens handbag with spacious compartments and durable straps (2).png\",\"product_images-1741779389018Elegant womens handbag with spacious compartments and durable straps.png\"]', 90, 11, 1, '2025-03-12 05:53:52', '2025-03-12 11:36:29'),
(77, 'Coffee Table', 'Modern coffee table with elegant wooden finish, suitable for living rooms and lounges. Durable and stylish.', 299.99, 'product_image_main-1741777946960OIP (1).jpeg', '[\"product_images-1741777946960Coffee Table (2).png\",\"product_images-1741777946963Coffee Table (1).png\",\"product_images-1741777946965Coffee Table.png\"]', 50, 17, 1, '2025-03-12 05:53:52', '2025-03-12 11:12:26'),
(78, 'Sofa Set', 'Luxurious and comfortable sofa set perfect for modern homes. Comes in premium fabric with a sturdy frame.', 999.99, 'product_image_main-1741779091648angle-shot-of-a-modern-leather-sofa-on-a-white-background-2HT5RYK.jpg', '[\"product_images-1741779091649OIP (4).jpeg\",\"product_images-1741779091649OIP (3).jpeg\",\"product_images-1741779091649OIP (2).jpeg\"]', 25, 17, 1, '2025-03-12 05:53:58', '2025-03-12 11:31:31'),
(79, 'Pet Food Pack', 'Healthy and nutritious pet food pack suitable for dogs and cats. Contains essential vitamins and minerals.', 59.99, 'product_image_main-1741778773915OIP (5).jpeg', '[\"product_images-1741778773916OIP (8).jpeg\",\"product_images-1741778773916OIP (7).jpeg\",\"product_images-1741778773916OIP (6).jpeg\"]', 150, 19, 1, '2025-03-12 05:54:02', '2025-03-12 11:26:13'),
(80, 'Action Figure Toy', 'Exciting action figure toy for kids, made with safe and durable material. Perfect for collections and playtime.', 39.99, 'product_image_main-1741777569900C4E8F9A0_5.jpg', '[\"product_images-1741777569901OIP (11).jpeg\",\"product_images-1741777569901OIP (10).jpeg\",\"product_images-1741777569901OIP (9).jpeg\"]', 200, 15, 1, '2025-03-12 05:54:03', '2025-03-13 10:09:14'),
(83, 'Sneakers', 'Comfortable sneakers for everyday use.', 99.99, 'product_image_main-1741779057141DALLÂ·E 2025-03-12 15.37.09 - A high-quality sneaker with a modern design, detailed textures, and a clear background. The sneaker should have a sleek and stylish look, with well-de.webp', '[\"product_images-1741779057145DALLÂ·E 2025-03-12 15.37.03 - A high-quality sneaker with a modern design, detailed textures, and a clear background. The sneaker should have a sleek and stylish look, with well-de.webp\",\"product_images-1741779057149DALLÂ·E 2025-03-12 15.37.00 - A high-quality sneaker with a modern design, detailed textures, and a clear background. The sneaker should have a sleek and stylish look, with well-de.webp\",\"product_images-1741779057152DALLÂ·E 2025-03-12 15.36.53 - A high-quality sneaker with a modern design, detailed textures, and a clear background. The sneaker should have a sleek and stylish look, with well-de.webp\"]', 110, 11, 1, '2025-03-12 05:58:35', '2025-03-12 11:30:57'),
(84, 'Wrist Watch', 'Elegant wrist watch with leather strap.', 199.99, 'product_image_main-1741779461616DALLÂ·E 2025-03-12 15.37.57 - A high-quality wristwatch with a modern and stylish design, detailed textures, and a clear background. The watch should have a sleek dial, elegant han.webp', '[\"product_images-1741779461621DALLÂ·E 2025-03-12 15.38.23 - A high-quality wristwatch with a modern and stylish design, detailed textures, and a clear background. The watch should have a sleek dial, elegant han.webp\",\"product_images-1741779461629DALLÂ·E 2025-03-12 15.38.14 - A high-quality wristwatch with a modern and stylish design, detailed textures, and a clear background. The watch should have a sleek dial, elegant han.webp\",\"product_images-1741779461634DALLÂ·E 2025-03-12 15.38.04 - A high-quality wristwatch with a modern and stylish design, detailed textures, and a clear background. The watch should have a sleek dial, elegant han.webp\"]', 70, 11, 1, '2025-03-12 05:58:35', '2025-03-12 11:37:41'),
(85, 'Sunglasses', ' UV-protected sunglasses.', 59.99, 'product_image_main-1741779134218DALLÂ·E 2025-03-12 15.39.26 - A high-quality pair of sunglasses with a modern and stylish design, detailed textures, and a clear background. The sunglasses should have sleek frames.webp', NULL, 150, 11, 1, '2025-03-12 05:58:36', '2025-03-25 04:36:16'),
(86, 'Fiction Novel', 'Bestselling fiction novel for readers.', 19.99, 'product_image_main-1741778181302Designer (4).jpeg', '[\"product_images-1741778181308Designer (11).jpeg\",\"product_images-1741778181313Designer (6).jpeg\",\"product_images-1741778181318Designer (7).jpeg\"]', 200, 12, 1, '2025-03-12 05:58:36', '2025-03-12 11:16:21'),
(87, 'Science Textbook', 'Comprehensive science textbook.', 49.99, 'product_image_main-1741778967231Designer (12).jpeg', '[\"product_images-1741778967231Designer (3).jpeg\",\"product_images-1741778967235Designer (2).jpeg\",\"product_images-1741778967236Designer (1).jpeg\"]', 100, 12, 1, '2025-03-12 05:58:36', '2025-03-12 11:29:27'),
(88, 'Travel Guide', 'Essential travel guide for destinations.', 29.99, 'product_image_main-1741779199516Designer.jpeg', '[\"product_images-1741779199522Designer (11).jpeg\",\"product_images-1741779199523Designer (7).jpeg\",\"product_images-1741779199535Designer (4).jpeg\"]', 120, 12, 1, '2025-03-12 05:58:36', '2025-03-12 11:33:19'),
(89, 'Children\'s Story Book', 'Illustrated story book for children.', 14.99, 'product_image_main-1741777908766Designer (16).jpeg', '[\"product_images-1741777908766Designer (15).jpeg\",\"product_images-1741777908771Designer (14).jpeg\",\"product_images-1741777908773Designer (13).jpeg\"]', 180, 12, 1, '2025-03-12 05:58:36', '2025-03-12 11:11:48'),
(90, 'Refrigerator', 'Modern double-door refrigerator with smart cooling.', 799.99, 'product_image_main-1741778685078Designer (17).jpeg', '[\"product_images-1741778685078Designer (20).jpeg\",\"product_images-1741778685080Designer (19).jpeg\",\"product_images-1741778685082Designer (18).jpeg\"]', 30, 13, 1, '2025-03-12 05:58:36', '2025-03-12 11:24:45'),
(92, 'Microwave Oven', 'Compact microwave oven with smart cooking.', 299.99, 'product_image_main-1741778488105Designer (29).jpeg', '[\"product_images-1741778488106Designer (28).jpeg\",\"product_images-1741778488107Designer (27).jpeg\",\"product_images-1741778488108Designer (26).jpeg\"]', 50, 13, 1, '2025-03-12 05:58:37', '2025-03-12 11:21:28'),
(93, 'Treadmill', 'Electric treadmill with foldable design.', 899.99, 'product_image_main-1741779232930Treadmill standing alone in gym with clear white or black background (3).png', '[\"product_images-1741779232931Treadmill standing alone in gym with clear white or black background (2).png\",\"product_images-1741779232933Treadmill standing alone in gym with clear white or black background (1).png\",\"product_images-1741779232934Treadmill standing alone in gym with clear white or black background.png\"]', 20, 14, 1, '2025-03-12 05:58:37', '2025-03-12 11:33:52'),
(94, 'Dumbbell Set', 'Adjustable dumbbell set.', 149.99, 'product_image_main-1741778116836Dumbbell Set with clear white or black background (1).png', '[\"product_images-1741778116839Dumbbell Set with a clear background (4).png\",\"product_images-1741778116841Dumbbell Set with a clear background (1).png\",\"product_images-1741778116842Dumbbell Set with a clear background.png\"]', 70, 14, 1, '2025-03-12 05:58:37', '2025-03-12 11:15:16'),
(95, 'Face Cream', 'Moisturizing face cream with natural extracts.', 39.99, 'product_image_main-1741778144677angel-face-cream-45.jpeg', '[\"product_images-1741778144678OIP (16).jpeg\",\"product_images-1741778144678OIP (15).jpeg\",\"product_images-1741778144678OIP (14).jpeg\"]', 200, 16, 1, '2025-03-12 05:58:37', '2025-03-13 10:09:48'),
(96, 'Lipstick', 'Matte finish lipstick.', 24.99, 'product_image_main-1741778371237lipstick (3).png', '[\"product_images-1741778371237lipstick (2).png\",\"product_images-1741778371242lipstick (1).png\",\"product_images-1741778371243lipstick.png\"]', 180, 16, 1, '2025-03-12 05:58:37', '2025-03-13 10:09:56'),
(100, 'Dining Table', 'Elegant wooden dining table for family meals.', 899.99, 'product_image_main-1741777971476dining-table-chair-modern-hipset-kitchen-with-metal-and-chairs-3d-render_9761154.jpg', '[\"product_images-1741777971476OIP (20).jpeg\",\"product_images-1741777971476OIP (19).jpeg\",\"product_images-1741777971476OIP (18).jpeg\"]', 15, 17, 1, '2025-03-12 06:00:02', '2025-03-13 10:10:06'),
(106, 'Building Blocks Set', 'Colorful building blocks set for kids.', 49.99, 'product_image_main-1741777695634OIP (28).jpeg', '[\"product_images-1741777695634OIP (29).jpeg\",\"product_images-1741777695634OIP (27).jpeg\",\"product_images-1741777695634Backdrop_Legos.webp\"]', 200, 15, 1, '2025-03-12 06:00:02', '2025-03-13 10:10:18'),
(108, 'Puzzle Game', 'Challenging puzzle game for children and adults.', 29.99, 'product_image_main-17417785844973d51cb16e1eec44d59af27c3bce13052.jpg', '[\"product_images-1741778584497OIP (32).jpeg\",\"product_images-1741778584497OIP (31).jpeg\",\"product_images-1741778584500OIP (30).jpeg\"]', 150, 15, 1, '2025-03-12 06:00:02', '2025-03-13 10:10:27'),
(110, 'Car Vacuum Cleaner', 'Portable car vacuum cleaner for easy interior cleaning.', 89.99, 'product_image_main-1741777793906OIP (35).jpeg', '[\"product_images-1741777793906OIP (36).jpeg\",\"product_images-1741777793906OIP (34).jpeg\",\"product_images-17417777939061d9a929a-fe26-4f5b-a7da-8f524a5cea75.d6ac16b9a979c0232be2540886cc594f.webp\"]', 100, 18, 1, '2025-03-12 06:00:02', '2025-03-12 11:09:53'),
(112, 'Car Seat Cover', 'Premium leather car seat cover set.', 199.99, 'product_image_main-1741777761255OIP (38).jpeg', '[\"product_images-1741777761255OIP (37).jpeg\",\"product_images-1741777761255Stylish-1.webp\"]', 80, 18, 1, '2025-03-12 06:00:02', '2025-03-12 11:09:21'),
(114, 'Car Charger', 'Fast-charging USB car charger.', 24.99, 'product_image_main-1741777728861OIP (42).jpeg', '[\"product_images-1741777728861OIP (41).jpeg\",\"product_images-1741777728861OIP (40).jpeg\",\"product_images-1741777728862OIP (39).jpeg\"]', 200, 18, 1, '2025-03-12 06:00:02', '2025-03-12 11:08:48'),
(115, 'Dog Food', 'Nutritious dog food for healthy growth.', 49.99, 'product_image_main-1741778051577OIP (8).jpeg', '[\"product_images-1741778051577OIP (7).jpeg\",\"product_images-1741778051578OIP (6).jpeg\",\"product_images-1741778051578OIP (5).jpeg\"]', 150, 19, 1, '2025-03-12 06:00:02', '2025-03-12 11:14:11'),
(117, 'Cat Toy Set', 'Interactive toy set for cats.', 34.99, 'product_image_main-1741777863376OIP (45).jpeg', '[\"product_images-1741777863376OIP (44).jpeg\",\"product_images-1741777863376OIP (43).jpeg\",\"product_images-174177786337651XZPM6ckZL._AC_.jpg\"]', 130, 19, 1, '2025-03-12 06:00:02', '2025-03-12 11:11:03'),
(120, 'Pet Bed', 'Comfortable pet bed for small to medium pets.', 79.99, 'product_image_main-1741778657748OIP (48).jpeg', '[\"product_images-1741778657748OIP (47).jpeg\",\"product_images-1741778657748OIP (46).jpeg\"]', 70, 19, 1, '2025-03-12 06:00:02', '2025-03-12 11:24:17'),
(121, 'Wireless Mouse', 'Ergonomic wireless mouse with high precision and smooth tracking.', 49.99, 'product_image_main-1741779351235OIP (51).jpeg', '[\"product_images-1741779351236OIP (50).jpeg\",\"product_images-1741779351236OIP (49).jpeg\",\"product_images-1741779351236wireless-grey-mouse-front-side-260nw-2227757203.webp\"]', 150, 10, 1, '2025-03-12 06:01:06', '2025-03-12 11:35:51'),
(122, 'Gaming Keyboard', 'Mechanical gaming keyboard with RGB lighting.', 129.99, 'product_image_main-1741778259065OIP (54).jpeg', '[\"product_images-1741778259066OIP (53).jpeg\",\"product_images-1741778259066OIP (52).jpeg\",\"product_images-1741778259066captivating-backdrops-live-streams-content-creator-enhance-your-visuals-make-impact_655090-2434774.jpg\"]', 100, 10, 1, '2025-03-12 06:01:06', '2025-03-12 11:17:39'),
(123, 'Leather Jacket', 'Premium black leather jacket for men.', 249.99, 'product_image_main-1741778347437Mens Leather Jacket.png', '[\"product_images-1741778347439Mens Leather Jacket (3).png\",\"product_images-1741778347441Mens Leather Jacket (2).png\",\"product_images-1741778347442Mens Leather Jacket (1).png\"]', 50, 11, 1, '2025-03-12 06:01:06', '2025-03-12 11:19:07'),
(125, 'Mystery Novel', 'Thrilling mystery novel with an unexpected twist.', 29.99, 'product_image_main-1741778556291DALLÂ·E 2025-03-12 15.40.40 - A high-quality fiction novel book with a modern and stylish cover design, detailed textures, and a clear background. The book should have a sleek and .webp', '[\"product_images-1741778556300Designer (2).jpeg\",\"product_images-1741778556302Designer (1).jpeg\",\"product_images-1741778556321Designer.jpeg\"]', 200, 12, 1, '2025-03-12 06:01:06', '2025-03-12 11:22:36'),
(126, 'Science Fiction Book', 'Exciting sci-fi adventure set in the future.', 34.99, 'product_image_main-1741778932834DALLÂ·E 2025-03-12 15.40.19 - A high-quality fiction novel book with a modern and stylish cover design, detailed textures, and a clear background. The book should have a sleek and .webp', '[\"product_images-1741778932840Designer (10).jpeg\",\"product_images-1741778932841Designer (6).jpeg\",\"product_images-1741778932853Designer (7).jpeg\"]', 180, 12, 1, '2025-03-12 06:01:06', '2025-03-12 11:28:52'),
(127, 'Air Fryer', 'Compact air fryer for healthy cooking.', 199.99, 'product_image_main-1741777605807OIP (56).jpeg', '[\"product_images-1741777605807OIP (57).jpeg\",\"product_images-1741777605808OIP (55).jpeg\",\"product_images-17417776058081000_F_573894992_ioNBdK3t2eqtVoN4Ni6TWnQpwvV40C9L.jpg\"]', 90, 13, 1, '2025-03-12 06:01:06', '2025-03-12 11:06:45'),
(131, 'Skin Care Kit', 'Complete skin care kit for healthy and glowing skin.', 149.99, 'product_image_main-1741778998253OIP (60).jpeg', '[\"product_images-1741778998253OIP (59).jpeg\",\"product_images-1741778998253OIP (58).jpeg\",\"product_images-1741778998253IMG_20220505_220822.webp\"]', 120, 16, 1, '2025-03-12 06:01:06', '2025-03-13 10:11:01'),
(132, 'Hair Dryer', 'High-performance hair dryer with heat control.', 89.99, 'product_image_main-1741778398509OIP (61).jpeg', '[\"product_images-1741778398509OIP (63).jpeg\",\"product_images-1741778398509OIP (62).jpeg\",\"product_images-1741778398509istockphoto-1371731362-1024x1024.jpg\"]', 90, 13, 1, '2025-03-12 06:01:06', '2025-03-13 10:11:11'),
(133, 'Office Chair', 'Ergonomic office chair with lumbar support and adjustable height.', 229.99, 'product_image_main-1741778625518OIP (23).jpeg', '[\"product_images-1741778625518OIP (22).jpeg\",\"product_images-1741778625518OIP (21).jpeg\"]', 70, 17, 1, '2025-03-12 06:03:18', '2025-03-13 10:11:24'),
(134, 'Wooden Dining Table', 'Solid wooden dining table suitable for family gatherings.', 599.99, 'product_image_main-1741779425535OIP (17).jpeg', '[\"product_images-1741779425535OIP (20).jpeg\",\"product_images-1741779425535OIP (19).jpeg\",\"product_images-1741779425535OIP (18).jpeg\"]', 25, 17, 1, '2025-03-12 06:03:18', '2025-03-13 10:11:32'),
(137, 'Dog Bed', 'Soft and comfortable dog bed, available in various sizes.', 99.99, 'product_image_main-1741778016819OIP (46).jpeg', '[\"product_images-1741778016819OIP (48).jpeg\",\"product_images-1741778016819OIP (47).jpeg\"]', 90, 19, 1, '2025-03-12 06:03:19', '2025-03-13 10:11:45'),
(138, 'Cat Scratching Post', 'Durable cat scratching post to keep cats entertained.', 59.99, 'product_image_main-1741777825651OIP (66).jpeg', '[\"product_images-1741777825651OIP (65).jpeg\",\"product_images-1741777825651OIP (64).jpeg\",\"product_images-1741777825651cat-scratching-post-on-a-white-background-GDKJK6.jpg\"]', 130, 19, 1, '2025-03-12 06:03:19', '2025-03-13 10:11:52'),
(141, 'Smart Watch', 'Feature-packed smart watch with health tracking.', 299.99, 'product_image_main-1741779024081OIP (69).jpeg', '[\"product_images-1741779024082smartwatch-isolated-total-white_921410-28440.avif\",\"product_images-1741779024082OIP (68).jpeg\",\"product_images-1741779024082OIP (67).jpeg\"]', 120, 10, 1, '2025-03-12 06:03:19', '2025-03-12 11:30:24'),
(142, 'Gaming Headset', 'Surround sound gaming headset with noise-canceling mic.', 149.99, 'product_image_main-1741778230909OIP (84).jpeg', '[\"product_images-1741778230910OIP (83).jpeg\",\"product_images-1741778230910OIP (82).jpeg\",\"product_images-1741778230910Fig2EAH800.jpg\"]', 80, 10, 1, '2025-03-12 06:03:19', '2025-03-12 11:17:10'),
(143, 'Tablet', 'Lightweight tablet perfect for work and entertainment.', 399.99, 'product_image_main-1741779162040OIP (75).jpeg', '[\"product_images-1741779162040OIP (74).jpeg\",\"product_images-1741779162040OIP (73).jpeg\",\"product_images-17417791620408c30fa9f49b950693a83ef80c6cf0562.jpg\"]', 60, 10, 1, '2025-03-12 06:03:19', '2025-03-12 11:32:42'),
(144, 'Washing Machine', 'High-capacity washing machine with smart wash programs.', 799.99, 'product_image_main-1741779266207Designer (25).jpeg', '[\"product_images-1741779266210Designer (24).jpeg\",\"product_images-1741779266212Designer (23).jpeg\",\"product_images-1741779266213Designer (22).jpeg\"]', 20, 13, 1, '2025-03-12 06:03:19', '2025-03-12 11:34:26'),
(147, 'Yoga Mat', 'Eco-friendly yoga mat for all types of exercises.', 59.99, 'product_image_main-1741779489760OIP (78).jpeg', '[\"product_images-1741779489760OIP (77).jpeg\",\"product_images-1741779489760OIP (76).jpeg\",\"product_images-1741779489760original.jpeg\"]', 180, 14, 1, '2025-03-12 06:03:20', '2025-03-12 11:38:09'),
(148, 'Wireless Charger', 'Fast wireless charger compatible with all Qi-enabled devices. Sleek and compact design for easy portability.', 49.99, 'product_image_main-1741779289661OIP (81).jpeg', '[\"product_images-1741779289661OIP (80).jpeg\",\"product_images-1741779289661OIP (79).jpeg\",\"product_images-17417792896625ac7d95c-0ede-4ca4-aa40-7078326219fb_1.731b21c0a6cf53e4f0910439a8d039ae.webp\"]', 300, 10, 1, '2025-03-12 06:03:20', '2025-03-12 11:34:49'),
(149, 'Bluetooth Headphones', 'Over-ear Bluetooth headphones with noise-canceling technology and long battery life.', 179.99, 'product_image_main-1741777630730OIP (84).jpeg', '[\"product_images-1741777630730OIP (83).jpeg\",\"product_images-1741777630730OIP (82).jpeg\",\"product_images-1741777630731Fig2EAH800.jpg\"]', 150, 10, 1, '2025-03-12 06:03:20', '2025-03-12 11:07:11'),
(150, 'Action Camera', 'Waterproof action camera with 4K recording and wide-angle lens. Great for outdoor adventures.', 249.99, 'product_image_main-1741777533661OIP (87).jpeg', '[\"product_images-1741777533662OIP (86).jpeg\",\"product_images-1741777533663OIP (85).jpeg\",\"product_images-174177753366481be1332-7a54-4476-a569-4df22811aa2d.64b3c864baa30532f0d5b1a0d20d0957.webp\"]', 85, 10, 1, '2025-03-12 06:03:20', '2025-03-12 11:05:33'),
(151, 'Instant Pot Cooker', 'Multi-functional electric pressure cooker with several cooking presets for quick and easy meals.', 189.99, 'product_image_main-1741778512609OIP (88).jpeg', '[\"product_images-1741778512609OIP (90).jpeg\",\"product_images-1741778512609OIP (89).jpeg\",\"product_images-1741778512609140-0021-01_IB_EPC_Silo_Instant-Pot-Duo-Crisp_1.jpg\"]', 60, 13, 1, '2025-03-12 06:03:20', '2025-03-12 11:21:52'),
(152, 'Portable Projector', 'Compact and portable projector suitable for home theaters and presentations. Supports HD display.', 399.99, 'product_image_main-1741779796557611-AgnpEhL._AC_UF1000,1000_QL80_.jpg', '[\"product_images-1741779796557OIP (93).jpeg\",\"product_images-1741779796557OIP (92).jpeg\",\"product_images-1741779796559OIP (91).jpeg\"]', 40, 10, 1, '2025-03-12 06:03:20', '2025-03-12 11:43:16');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL CHECK (`rating` between 1 and 5),
  `comment` text DEFAULT NULL,
  `review_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `customer_id`, `product_id`, `rating`, `comment`, `review_date`) VALUES
(1, 9, 70, 2, 'Amazing product. I use it daily and love it. Great value for money.', '2024-08-20 18:30:00'),
(2, 1, 70, 1, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-05-02 18:30:00'),
(3, 9, 70, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-07-15 18:30:00'),
(4, 5, 70, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-11-06 18:30:00'),
(5, 10, 70, 3, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-10-05 18:30:00'),
(6, 3, 70, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-04-12 18:30:00'),
(7, 2, 70, 2, 'Average product, decent for the price but not extraordinary.', '2024-06-26 18:30:00'),
(8, 4, 70, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-02-09 18:30:00'),
(9, 7, 70, 1, 'Amazing product. I use it daily and love it. Great value for money.', '2024-10-13 18:30:00'),
(10, 6, 70, 5, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-10-10 18:30:00'),
(11, 6, 70, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-09-25 18:30:00'),
(12, 3, 70, 3, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-09-24 18:30:00'),
(13, 1, 70, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-07-01 18:30:00'),
(14, 7, 70, 1, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-05-10 18:30:00'),
(15, 6, 70, 2, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-04-20 18:30:00'),
(16, 8, 70, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-05-05 18:30:00'),
(17, 3, 70, 2, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-08-14 18:30:00'),
(18, 3, 71, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-03-06 18:30:00'),
(19, 2, 71, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-10-26 18:30:00'),
(20, 9, 71, 5, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-04-15 18:30:00'),
(21, 2, 71, 3, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-06-09 18:30:00'),
(22, 10, 71, 3, 'Amazing product. I use it daily and love it. Great value for money.', '2024-10-20 18:30:00'),
(23, 3, 71, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-04-07 18:30:00'),
(24, 2, 71, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-11-25 18:30:00'),
(25, 1, 71, 2, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-03-17 18:30:00'),
(26, 8, 71, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-10-08 18:30:00'),
(27, 3, 71, 4, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2025-01-28 18:30:00'),
(28, 4, 71, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-04-14 18:30:00'),
(29, 9, 71, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-08-06 18:30:00'),
(30, 10, 71, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-10-16 18:30:00'),
(31, 5, 71, 4, 'Solid product. Worth considering if you need something reliable and efficient.', '2025-01-24 18:30:00'),
(32, 10, 71, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2025-01-30 18:30:00'),
(33, 1, 71, 3, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-09-27 18:30:00'),
(34, 2, 71, 4, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-11-15 18:30:00'),
(35, 4, 72, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2025-02-14 18:30:00'),
(36, 2, 72, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-10-20 18:30:00'),
(37, 7, 72, 5, 'Average product, decent for the price but not extraordinary.', '2025-01-06 18:30:00'),
(38, 10, 72, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2025-01-11 18:30:00'),
(39, 7, 72, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-09-13 18:30:00'),
(40, 1, 72, 2, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-03-18 18:30:00'),
(41, 3, 72, 4, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-03-28 18:30:00'),
(42, 10, 72, 2, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-12-11 18:30:00'),
(43, 3, 72, 2, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-12-19 18:30:00'),
(44, 3, 72, 2, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-10-09 18:30:00'),
(45, 8, 72, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-04-07 18:30:00'),
(46, 7, 72, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-01-26 18:30:00'),
(47, 8, 72, 2, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-04-24 18:30:00'),
(48, 4, 72, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-08-22 18:30:00'),
(49, 4, 72, 2, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-12-23 18:30:00'),
(50, 7, 72, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-12-25 18:30:00'),
(51, 9, 72, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-06-22 18:30:00'),
(52, 7, 73, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2025-02-23 18:30:00'),
(53, 4, 73, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-11-19 18:30:00'),
(54, 8, 73, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-04-01 18:30:00'),
(55, 5, 73, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-06-15 18:30:00'),
(56, 8, 73, 2, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2025-01-25 18:30:00'),
(57, 6, 73, 4, 'Average product, decent for the price but not extraordinary.', '2024-05-10 18:30:00'),
(58, 8, 73, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-07-05 18:30:00'),
(59, 9, 73, 4, 'Amazing product. I use it daily and love it. Great value for money.', '2024-11-10 18:30:00'),
(60, 10, 73, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-04-17 18:30:00'),
(61, 4, 73, 4, 'Amazing product. I use it daily and love it. Great value for money.', '2024-07-30 18:30:00'),
(62, 2, 73, 3, 'Average product, decent for the price but not extraordinary.', '2024-07-16 18:30:00'),
(63, 6, 73, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2025-01-17 18:30:00'),
(64, 8, 73, 3, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-05-09 18:30:00'),
(65, 1, 73, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-04-21 18:30:00'),
(66, 6, 73, 2, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-12-04 18:30:00'),
(67, 10, 73, 1, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-06-13 18:30:00'),
(68, 2, 73, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-07-26 18:30:00'),
(69, 1, 74, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-12-24 18:30:00'),
(70, 6, 74, 1, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-11-01 18:30:00'),
(71, 10, 74, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2025-02-17 18:30:00'),
(72, 9, 74, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-08-02 18:30:00'),
(73, 3, 74, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-05-31 18:30:00'),
(74, 3, 74, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-05-30 18:30:00'),
(75, 8, 74, 2, 'Amazing product. I use it daily and love it. Great value for money.', '2024-11-02 18:30:00'),
(76, 5, 74, 4, 'Amazing product. I use it daily and love it. Great value for money.', '2024-12-10 18:30:00'),
(77, 3, 74, 2, 'Average product, decent for the price but not extraordinary.', '2024-11-02 18:30:00'),
(78, 10, 74, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-06-13 18:30:00'),
(79, 7, 74, 5, 'Average product, decent for the price but not extraordinary.', '2024-09-05 18:30:00'),
(80, 10, 74, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-12-18 18:30:00'),
(81, 3, 74, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2025-01-01 18:30:00'),
(82, 6, 74, 3, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-07-03 18:30:00'),
(83, 3, 74, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2025-02-03 18:30:00'),
(84, 1, 74, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-01-01 18:30:00'),
(85, 3, 74, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-06-21 18:30:00'),
(86, 6, 75, 1, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-08-17 18:30:00'),
(87, 5, 75, 2, 'Average product, decent for the price but not extraordinary.', '2025-01-01 18:30:00'),
(88, 1, 75, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-10-25 18:30:00'),
(89, 3, 75, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2025-01-27 18:30:00'),
(90, 3, 75, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-11-20 18:30:00'),
(91, 3, 75, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-08-07 18:30:00'),
(92, 2, 75, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-07-11 18:30:00'),
(93, 6, 75, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-09-05 18:30:00'),
(94, 3, 75, 3, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-04-10 18:30:00'),
(95, 2, 75, 1, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-07-04 18:30:00'),
(96, 2, 75, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-02-28 18:30:00'),
(97, 3, 75, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-09-03 18:30:00'),
(98, 9, 75, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-03-12 18:30:00'),
(99, 8, 75, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-09-07 18:30:00'),
(100, 10, 75, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-04-12 18:30:00'),
(101, 5, 75, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-05-07 18:30:00'),
(102, 9, 75, 4, 'Average product, decent for the price but not extraordinary.', '2024-09-24 18:30:00'),
(103, 3, 76, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-12-07 18:30:00'),
(104, 6, 76, 2, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-07-16 18:30:00'),
(105, 5, 76, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-12-06 18:30:00'),
(106, 7, 76, 2, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-06-13 18:30:00'),
(107, 6, 76, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-09-16 18:30:00'),
(108, 8, 76, 3, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-09-01 18:30:00'),
(109, 10, 76, 1, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-01-15 18:30:00'),
(110, 5, 76, 5, 'Average product, decent for the price but not extraordinary.', '2025-02-12 18:30:00'),
(111, 3, 76, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-06-15 18:30:00'),
(112, 6, 76, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-12-08 18:30:00'),
(113, 6, 76, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-09-13 18:30:00'),
(114, 4, 76, 3, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-06-03 18:30:00'),
(115, 4, 76, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-10-06 18:30:00'),
(116, 9, 76, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-05-29 18:30:00'),
(117, 5, 76, 2, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-12-11 18:30:00'),
(118, 1, 76, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2025-01-10 18:30:00'),
(119, 7, 76, 1, 'Amazing product. I use it daily and love it. Great value for money.', '2024-05-21 18:30:00'),
(120, 4, 77, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-10-31 18:30:00'),
(121, 6, 77, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-11-17 18:30:00'),
(122, 4, 77, 2, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-05-03 18:30:00'),
(123, 10, 77, 3, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-09-28 18:30:00'),
(124, 5, 77, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2025-02-21 18:30:00'),
(125, 10, 77, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-04-17 18:30:00'),
(126, 6, 77, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2025-02-22 18:30:00'),
(127, 4, 77, 5, 'Average product, decent for the price but not extraordinary.', '2024-10-21 18:30:00'),
(128, 7, 77, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2025-01-16 18:30:00'),
(129, 5, 77, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2025-01-18 18:30:00'),
(130, 6, 77, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-06-13 18:30:00'),
(131, 1, 77, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-06-10 18:30:00'),
(132, 6, 77, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-05-11 18:30:00'),
(133, 8, 77, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-04-29 18:30:00'),
(134, 5, 77, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-03-31 18:30:00'),
(135, 8, 77, 2, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-11-19 18:30:00'),
(136, 5, 77, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-11-28 18:30:00'),
(137, 3, 78, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2025-01-31 18:30:00'),
(138, 2, 78, 4, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-07-18 18:30:00'),
(139, 3, 78, 1, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-06-01 18:30:00'),
(140, 8, 78, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-04-21 18:30:00'),
(141, 3, 78, 2, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-06-09 18:30:00'),
(142, 8, 78, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-05-23 18:30:00'),
(143, 1, 78, 2, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-10-08 18:30:00'),
(144, 4, 78, 1, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-08-02 18:30:00'),
(145, 3, 78, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-05-23 18:30:00'),
(146, 5, 78, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-12-30 18:30:00'),
(147, 5, 78, 3, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-03-25 18:30:00'),
(148, 9, 78, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-10-20 18:30:00'),
(149, 9, 78, 2, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-09-09 18:30:00'),
(150, 2, 78, 4, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-09-19 18:30:00'),
(151, 1, 78, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-11-22 18:30:00'),
(152, 1, 78, 3, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2025-01-26 18:30:00'),
(153, 8, 78, 5, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-10-13 18:30:00'),
(154, 8, 79, 3, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-09-19 18:30:00'),
(155, 4, 79, 4, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-09-16 18:30:00'),
(156, 5, 79, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-02-09 18:30:00'),
(157, 2, 79, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-12-21 18:30:00'),
(158, 6, 79, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-04-16 18:30:00'),
(159, 8, 79, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-03-27 18:30:00'),
(160, 8, 79, 1, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-02-14 18:30:00'),
(161, 4, 79, 2, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-06-02 18:30:00'),
(162, 4, 79, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-12-15 18:30:00'),
(163, 10, 79, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-09-07 18:30:00'),
(164, 8, 79, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-09-14 18:30:00'),
(165, 2, 79, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2025-02-25 18:30:00'),
(166, 1, 79, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-02-04 18:30:00'),
(167, 6, 79, 2, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-10-17 18:30:00'),
(168, 2, 79, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-04-23 18:30:00'),
(169, 8, 79, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-05-22 18:30:00'),
(170, 10, 79, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-07-23 18:30:00'),
(171, 8, 80, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-05-15 18:30:00'),
(172, 9, 80, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-08-28 18:30:00'),
(173, 1, 80, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-04-25 18:30:00'),
(174, 1, 80, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2025-01-03 18:30:00'),
(175, 5, 80, 5, 'Average product, decent for the price but not extraordinary.', '2024-12-03 18:30:00'),
(176, 3, 80, 2, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-12-22 18:30:00'),
(177, 2, 80, 2, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-05-06 18:30:00'),
(178, 10, 80, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-07-31 18:30:00'),
(179, 6, 80, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2025-03-08 18:30:00'),
(180, 9, 80, 3, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-06-21 18:30:00'),
(181, 9, 80, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-09-25 18:30:00'),
(182, 1, 80, 2, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-11-30 18:30:00'),
(183, 2, 80, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-05-27 18:30:00'),
(184, 9, 80, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-11-11 18:30:00'),
(185, 3, 80, 1, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-03-30 18:30:00'),
(186, 10, 80, 4, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-06-13 18:30:00'),
(187, 4, 80, 2, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2025-01-28 18:30:00'),
(188, 3, 83, 2, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-10-23 18:30:00'),
(189, 5, 83, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-01-31 18:30:00'),
(190, 3, 83, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-05-07 18:30:00'),
(191, 2, 83, 3, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-09-16 18:30:00'),
(192, 10, 83, 3, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-05-22 18:30:00'),
(193, 8, 83, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-07-11 18:30:00'),
(194, 5, 83, 3, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-12-28 18:30:00'),
(195, 6, 83, 2, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-07-26 18:30:00'),
(196, 10, 83, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-12-09 18:30:00'),
(197, 9, 83, 2, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-10-04 18:30:00'),
(198, 4, 83, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-05-17 18:30:00'),
(199, 8, 83, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-06-20 18:30:00'),
(200, 1, 83, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-10-10 18:30:00'),
(201, 4, 83, 1, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-11-05 18:30:00'),
(202, 10, 83, 4, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-08-26 18:30:00'),
(203, 4, 83, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-11-27 18:30:00'),
(204, 10, 83, 2, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-06-24 18:30:00'),
(205, 7, 84, 2, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-01-31 18:30:00'),
(206, 3, 84, 2, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-11-26 18:30:00'),
(207, 3, 84, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-04-01 18:30:00'),
(208, 10, 84, 2, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-09-16 18:30:00'),
(209, 6, 84, 3, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-09-30 18:30:00'),
(210, 3, 84, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-06-03 18:30:00'),
(211, 7, 84, 3, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-09-03 18:30:00'),
(212, 8, 84, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-03-18 18:30:00'),
(213, 9, 84, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-11-16 18:30:00'),
(214, 3, 84, 2, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-09-15 18:30:00'),
(215, 6, 84, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-04-06 18:30:00'),
(216, 7, 84, 5, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-06-17 18:30:00'),
(217, 1, 84, 3, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-04-29 18:30:00'),
(218, 3, 84, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-11-19 18:30:00'),
(219, 7, 84, 1, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-12-21 18:30:00'),
(220, 7, 84, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-03-14 18:30:00'),
(221, 8, 84, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2025-01-15 18:30:00'),
(222, 4, 85, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-11-23 18:30:00'),
(223, 5, 85, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2025-02-09 18:30:00'),
(224, 5, 85, 4, 'Amazing product. I use it daily and love it. Great value for money.', '2024-08-31 18:30:00'),
(225, 7, 85, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-09-06 18:30:00'),
(226, 4, 85, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2025-01-01 18:30:00'),
(227, 10, 85, 4, 'Amazing product. I use it daily and love it. Great value for money.', '2024-10-23 18:30:00'),
(228, 1, 85, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-03-01 18:30:00'),
(229, 4, 85, 2, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-06-30 18:30:00'),
(230, 8, 85, 2, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-04-20 18:30:00'),
(231, 8, 85, 4, 'Amazing product. I use it daily and love it. Great value for money.', '2025-03-12 18:30:00'),
(232, 9, 85, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-08-14 18:30:00'),
(233, 7, 85, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-07-12 18:30:00'),
(234, 2, 85, 1, 'Average product, decent for the price but not extraordinary.', '2024-10-02 18:30:00'),
(235, 6, 85, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-06-16 18:30:00'),
(236, 1, 85, 2, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-10-08 18:30:00'),
(237, 7, 85, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-11-19 18:30:00'),
(238, 9, 85, 3, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-06-21 18:30:00'),
(239, 9, 86, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2025-02-24 18:30:00'),
(240, 6, 86, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-03-04 18:30:00'),
(241, 3, 86, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-08-01 18:30:00'),
(242, 5, 86, 5, 'Average product, decent for the price but not extraordinary.', '2025-02-15 18:30:00'),
(243, 3, 86, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-07-29 18:30:00'),
(244, 5, 86, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-07-22 18:30:00'),
(245, 7, 86, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-11-02 18:30:00'),
(246, 5, 86, 5, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-04-05 18:30:00'),
(247, 8, 86, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-07-17 18:30:00'),
(248, 1, 86, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-04-13 18:30:00'),
(249, 8, 86, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-12-13 18:30:00'),
(250, 8, 86, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-07-15 18:30:00'),
(251, 3, 86, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-07-31 18:30:00'),
(252, 6, 86, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-02-07 18:30:00'),
(253, 5, 86, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-05-24 18:30:00'),
(254, 2, 86, 5, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-03-08 18:30:00'),
(255, 1, 86, 4, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-10-07 18:30:00'),
(256, 4, 87, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-08-22 18:30:00'),
(257, 3, 87, 2, 'Average product, decent for the price but not extraordinary.', '2024-12-11 18:30:00'),
(258, 3, 87, 4, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-04-21 18:30:00'),
(259, 3, 87, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2025-01-11 18:30:00'),
(260, 6, 87, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2025-01-20 18:30:00'),
(261, 1, 87, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-05-21 18:30:00'),
(262, 10, 87, 4, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-10-21 18:30:00'),
(263, 9, 87, 3, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-06-19 18:30:00'),
(264, 8, 87, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-05-10 18:30:00'),
(265, 10, 87, 3, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-11-26 18:30:00'),
(266, 3, 87, 3, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-08-05 18:30:00'),
(267, 4, 87, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-07-21 18:30:00'),
(268, 2, 87, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-12-16 18:30:00'),
(269, 5, 87, 1, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-11-03 18:30:00'),
(270, 7, 87, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-09-03 18:30:00'),
(271, 4, 87, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-08-17 18:30:00'),
(272, 1, 87, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-08-15 18:30:00'),
(273, 1, 88, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-05-21 18:30:00'),
(274, 6, 88, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-10-01 18:30:00'),
(275, 6, 88, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-04-25 18:30:00'),
(276, 10, 88, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-11-23 18:30:00'),
(277, 6, 88, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-05-10 18:30:00'),
(278, 1, 88, 3, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-03-25 18:30:00'),
(279, 6, 88, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-06-01 18:30:00'),
(280, 8, 88, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-03-20 18:30:00'),
(281, 10, 88, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-05-06 18:30:00'),
(282, 2, 88, 4, 'Average product, decent for the price but not extraordinary.', '2024-11-01 18:30:00'),
(283, 2, 88, 4, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2025-03-05 18:30:00'),
(284, 9, 88, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-07-19 18:30:00'),
(285, 9, 88, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-05-02 18:30:00'),
(286, 5, 88, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-12-18 18:30:00'),
(287, 7, 88, 3, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-08-01 18:30:00'),
(288, 2, 88, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2025-01-03 18:30:00'),
(289, 8, 88, 3, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-07-07 18:30:00'),
(290, 8, 89, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2025-01-19 18:30:00'),
(291, 3, 89, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-09-20 18:30:00'),
(292, 7, 89, 2, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-11-06 18:30:00'),
(293, 4, 89, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-06-15 18:30:00'),
(294, 3, 89, 5, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-12-23 18:30:00'),
(295, 5, 89, 3, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-11-05 18:30:00'),
(296, 3, 89, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-11-15 18:30:00'),
(297, 10, 89, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-02-01 18:30:00'),
(298, 8, 89, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-08-11 18:30:00'),
(299, 2, 89, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-03-24 18:30:00'),
(300, 10, 89, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-08-21 18:30:00'),
(301, 6, 89, 2, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-10-28 18:30:00'),
(302, 2, 89, 3, 'Average product, decent for the price but not extraordinary.', '2024-12-03 18:30:00'),
(303, 6, 89, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-06-25 18:30:00'),
(304, 8, 89, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-11-18 18:30:00'),
(305, 3, 89, 3, 'Average product, decent for the price but not extraordinary.', '2024-10-15 18:30:00'),
(306, 2, 89, 2, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-11-21 18:30:00'),
(307, 9, 90, 2, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-12-04 18:30:00'),
(308, 8, 90, 2, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-11-29 18:30:00'),
(309, 1, 90, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-09-30 18:30:00'),
(310, 1, 90, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-07-26 18:30:00'),
(311, 5, 90, 4, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-09-14 18:30:00'),
(312, 7, 90, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2025-02-13 18:30:00'),
(313, 6, 90, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-06-07 18:30:00'),
(314, 2, 90, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-04-24 18:30:00'),
(315, 4, 90, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-12-06 18:30:00'),
(316, 1, 90, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-08-31 18:30:00'),
(317, 10, 90, 3, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-09-18 18:30:00'),
(318, 5, 90, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-03-17 18:30:00'),
(319, 2, 90, 5, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-12-06 18:30:00'),
(320, 4, 90, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-04-15 18:30:00'),
(321, 2, 90, 2, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-10-15 18:30:00'),
(322, 2, 90, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-05-31 18:30:00'),
(323, 3, 90, 2, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-08-13 18:30:00'),
(324, 5, 92, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-10-01 18:30:00'),
(325, 10, 92, 4, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2025-01-26 18:30:00'),
(326, 7, 92, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-01-09 18:30:00'),
(327, 9, 92, 1, 'Amazing product. I use it daily and love it. Great value for money.', '2025-03-01 18:30:00'),
(328, 2, 92, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-09-26 18:30:00'),
(329, 8, 92, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-05-16 18:30:00'),
(330, 4, 92, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-04-12 18:30:00'),
(331, 3, 92, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-08-12 18:30:00'),
(332, 8, 92, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-10-04 18:30:00'),
(333, 1, 92, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-06-23 18:30:00'),
(334, 5, 92, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-05-21 18:30:00'),
(335, 10, 92, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2025-01-05 18:30:00'),
(336, 1, 92, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-04-14 18:30:00'),
(337, 9, 92, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2025-03-01 18:30:00'),
(338, 2, 92, 4, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-11-16 18:30:00'),
(339, 4, 92, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-06-22 18:30:00'),
(340, 6, 92, 3, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-11-29 18:30:00'),
(341, 5, 93, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-03-02 18:30:00'),
(342, 5, 93, 1, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-10-25 18:30:00'),
(343, 4, 93, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-08-10 18:30:00'),
(344, 5, 93, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2025-03-12 18:30:00'),
(345, 8, 93, 3, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2025-02-22 18:30:00'),
(346, 5, 93, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-09-19 18:30:00'),
(347, 2, 93, 2, 'Amazing product. I use it daily and love it. Great value for money.', '2025-02-03 18:30:00'),
(348, 1, 93, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-06-22 18:30:00'),
(349, 9, 93, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-06-06 18:30:00'),
(350, 5, 93, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-05-13 18:30:00'),
(351, 3, 93, 1, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-07-01 18:30:00'),
(352, 5, 93, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-12-26 18:30:00'),
(353, 6, 93, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-04-13 18:30:00'),
(354, 6, 93, 1, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-11-08 18:30:00'),
(355, 6, 93, 3, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-09-12 18:30:00'),
(356, 6, 93, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-09-21 18:30:00'),
(357, 3, 93, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-12-20 18:30:00'),
(358, 2, 94, 2, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-05-24 18:30:00'),
(359, 1, 94, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-11-10 18:30:00'),
(360, 4, 94, 4, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-07-23 18:30:00'),
(361, 6, 94, 5, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2025-02-16 18:30:00'),
(362, 4, 94, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-04-26 18:30:00'),
(363, 7, 94, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-03-15 18:30:00'),
(364, 8, 94, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-07-12 18:30:00'),
(365, 3, 94, 1, 'Amazing product. I use it daily and love it. Great value for money.', '2024-07-25 18:30:00'),
(366, 6, 94, 3, 'Amazing product. I use it daily and love it. Great value for money.', '2024-10-18 18:30:00'),
(367, 1, 94, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-07-08 18:30:00'),
(368, 5, 94, 3, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-09-13 18:30:00'),
(369, 3, 94, 4, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-06-05 18:30:00'),
(370, 6, 94, 3, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-04-06 18:30:00'),
(371, 6, 94, 3, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-12-02 18:30:00'),
(372, 5, 94, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-08-04 18:30:00'),
(373, 5, 94, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-02-20 18:30:00'),
(374, 8, 94, 4, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-10-26 18:30:00'),
(375, 8, 95, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-11-18 18:30:00'),
(376, 4, 95, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-08-07 18:30:00'),
(377, 3, 95, 1, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-07-30 18:30:00'),
(378, 10, 95, 1, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-03-20 18:30:00'),
(379, 5, 95, 5, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-07-25 18:30:00'),
(380, 9, 95, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-10-04 18:30:00'),
(381, 4, 95, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-08-02 18:30:00'),
(382, 3, 95, 3, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-04-01 18:30:00'),
(383, 8, 95, 2, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-04-12 18:30:00'),
(384, 6, 95, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-10-16 18:30:00'),
(385, 8, 95, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2025-02-04 18:30:00'),
(386, 8, 95, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-06-29 18:30:00'),
(387, 7, 95, 1, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-09-28 18:30:00'),
(388, 4, 95, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-03-16 18:30:00'),
(389, 5, 95, 3, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-06-17 18:30:00'),
(390, 1, 95, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-08-04 18:30:00'),
(391, 2, 95, 3, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-07-14 18:30:00'),
(392, 6, 96, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-06-24 18:30:00'),
(393, 5, 96, 2, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-09-22 18:30:00'),
(394, 9, 96, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-07-14 18:30:00'),
(395, 7, 96, 3, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-03-09 18:30:00'),
(396, 6, 96, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-02-09 18:30:00'),
(397, 10, 96, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-07-27 18:30:00'),
(398, 5, 96, 3, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-12-28 18:30:00'),
(399, 4, 96, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-09-16 18:30:00'),
(400, 10, 96, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-07-30 18:30:00'),
(401, 5, 96, 3, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-08-17 18:30:00'),
(402, 1, 96, 4, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-05-24 18:30:00'),
(403, 3, 96, 2, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-04-18 18:30:00'),
(404, 5, 96, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-12-18 18:30:00'),
(405, 10, 96, 5, 'Average product, decent for the price but not extraordinary.', '2024-12-21 18:30:00'),
(406, 2, 96, 5, 'Average product, decent for the price but not extraordinary.', '2024-06-30 18:30:00'),
(407, 3, 96, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-09-25 18:30:00'),
(408, 4, 96, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-05-20 18:30:00'),
(409, 6, 100, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-05-16 18:30:00'),
(410, 1, 100, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-12-20 18:30:00'),
(411, 1, 100, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-03-25 18:30:00'),
(412, 1, 100, 4, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-11-01 18:30:00'),
(413, 9, 100, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-10-11 18:30:00'),
(414, 9, 100, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-11-04 18:30:00'),
(415, 2, 100, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-08-18 18:30:00'),
(416, 9, 100, 5, 'Average product, decent for the price but not extraordinary.', '2024-09-20 18:30:00'),
(417, 9, 100, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-04-11 18:30:00'),
(418, 6, 100, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-11-20 18:30:00'),
(419, 5, 100, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-09-16 18:30:00'),
(420, 4, 100, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-07-05 18:30:00'),
(421, 1, 100, 3, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-08-11 18:30:00'),
(422, 4, 100, 2, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-10-23 18:30:00'),
(423, 6, 100, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-07-17 18:30:00'),
(424, 5, 100, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-05-05 18:30:00'),
(425, 9, 100, 4, 'Amazing product. I use it daily and love it. Great value for money.', '2024-08-04 18:30:00'),
(426, 2, 106, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-12-29 18:30:00'),
(427, 4, 106, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-07-22 18:30:00'),
(428, 4, 106, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-05-17 18:30:00'),
(429, 4, 106, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-10-11 18:30:00'),
(430, 9, 106, 2, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-12-09 18:30:00'),
(431, 6, 106, 4, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-08-07 18:30:00'),
(432, 6, 106, 1, 'Amazing product. I use it daily and love it. Great value for money.', '2024-03-22 18:30:00'),
(433, 2, 106, 1, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-05-19 18:30:00'),
(434, 2, 106, 4, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-12-31 18:30:00'),
(435, 9, 106, 3, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-12-31 18:30:00'),
(436, 5, 106, 2, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-10-22 18:30:00'),
(437, 1, 106, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-05-10 18:30:00'),
(438, 1, 106, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-09-21 18:30:00'),
(439, 6, 106, 2, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-04-29 18:30:00'),
(440, 7, 106, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2025-03-02 18:30:00'),
(441, 1, 106, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-06-16 18:30:00'),
(442, 10, 106, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-01-04 18:30:00'),
(443, 4, 108, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-05-11 18:30:00'),
(444, 6, 108, 2, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-06-17 18:30:00'),
(445, 7, 108, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-10-12 18:30:00'),
(446, 5, 108, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-10-03 18:30:00'),
(447, 5, 108, 5, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-05-31 18:30:00'),
(448, 3, 108, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-12-28 18:30:00'),
(449, 10, 108, 1, 'Average product, decent for the price but not extraordinary.', '2024-07-21 18:30:00'),
(450, 3, 108, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-08-17 18:30:00'),
(451, 3, 108, 3, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-08-18 18:30:00'),
(452, 7, 108, 5, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-01-14 18:30:00'),
(453, 8, 108, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-12-02 18:30:00'),
(454, 9, 108, 3, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-07-22 18:30:00'),
(455, 1, 108, 3, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-06-20 18:30:00'),
(456, 4, 108, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2025-03-04 18:30:00'),
(457, 10, 108, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-06-14 18:30:00'),
(458, 2, 108, 1, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-11-24 18:30:00'),
(459, 7, 108, 1, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-03-20 18:30:00'),
(460, 8, 110, 3, 'Average product, decent for the price but not extraordinary.', '2025-02-26 18:30:00'),
(461, 3, 110, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2025-01-30 18:30:00'),
(462, 9, 110, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2025-01-28 18:30:00'),
(463, 6, 110, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-04-01 18:30:00'),
(464, 4, 110, 4, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-12-10 18:30:00'),
(465, 2, 110, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-04-27 18:30:00'),
(466, 8, 110, 3, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-04-21 18:30:00'),
(467, 3, 110, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-08-23 18:30:00'),
(468, 9, 110, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-12-17 18:30:00'),
(469, 3, 110, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2025-02-03 18:30:00'),
(470, 7, 110, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-10-02 18:30:00'),
(471, 10, 110, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-06-28 18:30:00'),
(472, 3, 110, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-04-27 18:30:00'),
(473, 10, 110, 1, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-11-17 18:30:00'),
(474, 5, 110, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-06-17 18:30:00'),
(475, 10, 110, 5, 'Average product, decent for the price but not extraordinary.', '2024-05-23 18:30:00'),
(476, 5, 110, 4, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-07-30 18:30:00'),
(477, 4, 112, 1, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-05-03 18:30:00'),
(478, 6, 112, 1, 'Amazing product. I use it daily and love it. Great value for money.', '2024-03-25 18:30:00'),
(479, 2, 112, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-10-09 18:30:00'),
(480, 6, 112, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-07-06 18:30:00'),
(481, 4, 112, 3, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-06-09 18:30:00'),
(482, 10, 112, 3, 'Not fully satisfied. The product works but the build quality could be improved.', '2025-01-21 18:30:00'),
(483, 10, 112, 2, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-07-18 18:30:00'),
(484, 8, 112, 2, 'Average product, decent for the price but not extraordinary.', '2024-07-05 18:30:00'),
(485, 10, 112, 2, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-03-16 18:30:00'),
(486, 6, 112, 4, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-10-25 18:30:00'),
(487, 7, 112, 1, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-04-15 18:30:00'),
(488, 7, 112, 4, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-06-14 18:30:00'),
(489, 5, 112, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-07-22 18:30:00'),
(490, 7, 112, 4, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-04-28 18:30:00'),
(491, 9, 112, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-08-04 18:30:00'),
(492, 5, 112, 2, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-11-04 18:30:00'),
(493, 5, 112, 2, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-07-10 18:30:00'),
(494, 1, 114, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2025-01-08 18:30:00'),
(495, 7, 114, 5, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2025-01-03 18:30:00'),
(496, 3, 114, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-04-10 18:30:00'),
(497, 10, 114, 4, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-10-14 18:30:00'),
(498, 2, 114, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-07-18 18:30:00'),
(499, 6, 114, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2025-02-17 18:30:00'),
(500, 5, 114, 4, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-08-15 18:30:00'),
(501, 1, 114, 5, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-11-28 18:30:00'),
(502, 6, 114, 2, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-06-07 18:30:00'),
(503, 1, 114, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2025-01-04 18:30:00'),
(504, 10, 114, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-10-07 18:30:00'),
(505, 7, 114, 5, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2025-01-25 18:30:00'),
(506, 5, 114, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-04-20 18:30:00'),
(507, 2, 114, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-02-09 18:30:00'),
(508, 4, 114, 3, 'Amazing product. I use it daily and love it. Great value for money.', '2024-10-13 18:30:00'),
(509, 9, 114, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-04-29 18:30:00'),
(510, 7, 114, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-01-23 18:30:00'),
(511, 6, 115, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-03-25 18:30:00'),
(512, 5, 115, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-12-25 18:30:00'),
(513, 9, 115, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-05-03 18:30:00'),
(514, 7, 115, 3, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-08-14 18:30:00'),
(515, 9, 115, 3, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-04-11 18:30:00'),
(516, 6, 115, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-08-20 18:30:00'),
(517, 1, 115, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-11-28 18:30:00'),
(518, 9, 115, 4, 'Average product, decent for the price but not extraordinary.', '2024-03-21 18:30:00'),
(519, 5, 115, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-11-01 18:30:00'),
(520, 2, 115, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-06-01 18:30:00'),
(521, 2, 115, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-03-06 18:30:00'),
(522, 3, 115, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-07-26 18:30:00'),
(523, 3, 115, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2025-01-10 18:30:00'),
(524, 8, 115, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-11-21 18:30:00'),
(525, 3, 115, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-11-17 18:30:00'),
(526, 10, 115, 2, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-09-24 18:30:00'),
(527, 1, 115, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-03-31 18:30:00'),
(528, 8, 117, 5, 'Average product, decent for the price but not extraordinary.', '2024-07-02 18:30:00'),
(529, 5, 117, 3, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-07-01 18:30:00'),
(530, 9, 117, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-07-05 18:30:00'),
(531, 4, 117, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-11-30 18:30:00'),
(532, 9, 117, 2, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-03-01 18:30:00'),
(533, 10, 117, 3, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-08-08 18:30:00'),
(534, 8, 117, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-11-20 18:30:00'),
(535, 9, 117, 5, 'Average product, decent for the price but not extraordinary.', '2024-12-14 18:30:00'),
(536, 10, 117, 3, 'Average product, decent for the price but not extraordinary.', '2024-04-01 18:30:00'),
(537, 7, 117, 3, 'Amazing product. I use it daily and love it. Great value for money.', '2024-12-19 18:30:00'),
(538, 5, 117, 2, 'Average product, decent for the price but not extraordinary.', '2024-11-26 18:30:00'),
(539, 8, 117, 2, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-09-12 18:30:00'),
(540, 7, 117, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-05-31 18:30:00'),
(541, 5, 117, 2, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-05-20 18:30:00'),
(542, 4, 117, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-04-14 18:30:00'),
(543, 3, 117, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-09-03 18:30:00'),
(544, 10, 117, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-11-25 18:30:00'),
(545, 9, 120, 1, 'Average product, decent for the price but not extraordinary.', '2024-03-20 18:30:00'),
(546, 7, 120, 4, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-11-05 18:30:00'),
(547, 3, 120, 5, 'Average product, decent for the price but not extraordinary.', '2025-01-15 18:30:00'),
(548, 8, 120, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-04-29 18:30:00'),
(549, 9, 120, 4, 'Average product, decent for the price but not extraordinary.', '2024-08-19 18:30:00'),
(550, 6, 120, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-09-02 18:30:00'),
(551, 8, 120, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-10-07 18:30:00'),
(552, 2, 120, 2, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-06-10 18:30:00'),
(553, 3, 120, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-05-16 18:30:00'),
(554, 6, 120, 3, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-08-29 18:30:00'),
(555, 3, 120, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-08-13 18:30:00'),
(556, 1, 120, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-06-13 18:30:00'),
(557, 5, 120, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-10-17 18:30:00'),
(558, 9, 120, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-04-04 18:30:00'),
(559, 6, 120, 4, 'Solid product. Worth considering if you need something reliable and efficient.', '2025-01-02 18:30:00'),
(560, 7, 120, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-12-05 18:30:00'),
(561, 7, 120, 5, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-11-18 18:30:00'),
(562, 9, 121, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2025-03-01 18:30:00'),
(563, 10, 121, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2025-01-14 18:30:00'),
(564, 6, 121, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-07-22 18:30:00'),
(565, 3, 121, 5, 'Average product, decent for the price but not extraordinary.', '2024-08-16 18:30:00'),
(566, 6, 121, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-01-17 18:30:00'),
(567, 5, 121, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-01-07 18:30:00'),
(568, 5, 121, 3, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-12-17 18:30:00'),
(569, 6, 121, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-07-11 18:30:00'),
(570, 8, 121, 3, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-03-23 18:30:00'),
(571, 6, 121, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-08-17 18:30:00'),
(572, 10, 121, 4, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-10-16 18:30:00'),
(573, 3, 121, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-12-16 18:30:00'),
(574, 9, 121, 1, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-02-19 18:30:00'),
(575, 3, 121, 5, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-04-19 18:30:00'),
(576, 5, 121, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2025-02-16 18:30:00'),
(577, 7, 121, 3, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-04-21 18:30:00'),
(578, 9, 121, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2025-02-11 18:30:00'),
(579, 3, 122, 2, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-09-30 18:30:00'),
(580, 9, 122, 5, 'Average product, decent for the price but not extraordinary.', '2024-08-28 18:30:00'),
(581, 5, 122, 2, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-06-27 18:30:00'),
(582, 7, 122, 2, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-12-06 18:30:00'),
(583, 7, 122, 1, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-11-07 18:30:00'),
(584, 8, 122, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-04-26 18:30:00'),
(585, 9, 122, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-10-16 18:30:00'),
(586, 8, 122, 2, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-09-23 18:30:00'),
(587, 8, 122, 4, 'Amazing product. I use it daily and love it. Great value for money.', '2024-10-13 18:30:00'),
(588, 10, 122, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-04-19 18:30:00'),
(589, 1, 122, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-06-25 18:30:00'),
(590, 2, 122, 2, 'The product is fine but I expected better durability. Still satisfied overall.', '2025-03-05 18:30:00'),
(591, 8, 122, 3, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-03-20 18:30:00'),
(592, 2, 122, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-01-31 18:30:00'),
(593, 4, 122, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-08-11 18:30:00'),
(594, 6, 122, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-12-04 18:30:00'),
(595, 8, 122, 3, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-09-07 18:30:00'),
(596, 5, 123, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-11-19 18:30:00'),
(597, 8, 123, 2, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-07-11 18:30:00'),
(598, 1, 123, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-11-09 18:30:00'),
(599, 7, 123, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-06-14 18:30:00'),
(600, 7, 123, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-12-01 18:30:00'),
(601, 6, 123, 2, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-02-23 18:30:00'),
(602, 6, 123, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-09-04 18:30:00'),
(603, 2, 123, 4, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-09-07 18:30:00'),
(604, 9, 123, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2025-01-21 18:30:00'),
(605, 8, 123, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-04-25 18:30:00'),
(606, 2, 123, 5, 'Average product, decent for the price but not extraordinary.', '2024-11-06 18:30:00'),
(607, 3, 123, 2, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-09-30 18:30:00'),
(608, 2, 123, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-05-31 18:30:00'),
(609, 3, 123, 2, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-05-01 18:30:00'),
(610, 10, 123, 2, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-08-29 18:30:00'),
(611, 1, 123, 3, 'Average product, decent for the price but not extraordinary.', '2024-10-27 18:30:00'),
(612, 2, 123, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-04-12 18:30:00'),
(613, 10, 125, 4, 'Average product, decent for the price but not extraordinary.', '2024-12-29 18:30:00'),
(614, 7, 125, 4, 'Average product, decent for the price but not extraordinary.', '2024-06-07 18:30:00'),
(615, 5, 125, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-11-10 18:30:00'),
(616, 2, 125, 2, 'Average product, decent for the price but not extraordinary.', '2024-06-29 18:30:00'),
(617, 9, 125, 1, 'Amazing product. I use it daily and love it. Great value for money.', '2024-10-14 18:30:00'),
(618, 10, 125, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-12-13 18:30:00'),
(619, 7, 125, 3, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-12-24 18:30:00'),
(620, 9, 125, 4, 'Amazing product. I use it daily and love it. Great value for money.', '2024-09-20 18:30:00'),
(621, 3, 125, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-04-13 18:30:00'),
(622, 8, 125, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-02-14 18:30:00'),
(623, 7, 125, 5, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-05-28 18:30:00'),
(624, 5, 125, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-04-26 18:30:00'),
(625, 3, 125, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-09-23 18:30:00'),
(626, 9, 125, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-02-07 18:30:00'),
(627, 10, 125, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-02-28 18:30:00'),
(628, 8, 125, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-10-01 18:30:00'),
(629, 6, 125, 2, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-04-15 18:30:00'),
(630, 3, 126, 2, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-03-31 18:30:00'),
(631, 9, 126, 3, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-08-02 18:30:00'),
(632, 6, 126, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-02-28 18:30:00'),
(633, 8, 126, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-05-20 18:30:00'),
(634, 10, 126, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-12-25 18:30:00'),
(635, 6, 126, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-03-24 18:30:00'),
(636, 6, 126, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-07-02 18:30:00'),
(637, 3, 126, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-02-05 18:30:00'),
(638, 6, 126, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-10-19 18:30:00'),
(639, 7, 126, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-09-19 18:30:00'),
(640, 3, 126, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-12-09 18:30:00'),
(641, 9, 126, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2025-02-28 18:30:00'),
(642, 5, 126, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-08-10 18:30:00'),
(643, 5, 126, 3, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-12-24 18:30:00'),
(644, 2, 126, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2025-02-02 18:30:00'),
(645, 7, 126, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-08-01 18:30:00'),
(646, 9, 126, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-09-09 18:30:00'),
(647, 9, 127, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-09-05 18:30:00'),
(648, 10, 127, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-09-28 18:30:00'),
(649, 2, 127, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2025-01-20 18:30:00'),
(650, 6, 127, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-09-08 18:30:00'),
(651, 2, 127, 3, 'Amazing product. I use it daily and love it. Great value for money.', '2024-04-03 18:30:00'),
(652, 10, 127, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-12-08 18:30:00'),
(653, 10, 127, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-06-10 18:30:00'),
(654, 6, 127, 1, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-02-07 18:30:00'),
(655, 5, 127, 2, 'Not as good as advertised. Disappointed in the performance and quality.', '2025-03-09 18:30:00'),
(656, 2, 127, 4, 'Average product, decent for the price but not extraordinary.', '2024-12-09 18:30:00'),
(657, 4, 127, 4, 'Average product, decent for the price but not extraordinary.', '2024-07-09 18:30:00'),
(658, 10, 127, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-04-20 18:30:00'),
(659, 6, 127, 2, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-07-02 18:30:00'),
(660, 8, 127, 3, 'Amazing product. I use it daily and love it. Great value for money.', '2024-12-27 18:30:00'),
(661, 4, 127, 1, 'Average product, decent for the price but not extraordinary.', '2024-10-27 18:30:00'),
(662, 2, 127, 3, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-10-01 18:30:00'),
(663, 7, 127, 2, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-11-11 18:30:00'),
(664, 3, 131, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-12-19 18:30:00'),
(665, 2, 131, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-12-27 18:30:00'),
(666, 3, 131, 3, 'Amazing product. I use it daily and love it. Great value for money.', '2024-07-01 18:30:00'),
(667, 10, 131, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-06-05 18:30:00'),
(668, 1, 131, 3, 'Amazing product. I use it daily and love it. Great value for money.', '2024-10-02 18:30:00'),
(669, 10, 131, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-05-25 18:30:00'),
(670, 1, 131, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2025-01-01 18:30:00'),
(671, 4, 131, 3, 'Amazing product. I use it daily and love it. Great value for money.', '2024-07-25 18:30:00'),
(672, 3, 131, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-07-09 18:30:00'),
(673, 7, 131, 1, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-07-19 18:30:00'),
(674, 6, 131, 3, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-11-23 18:30:00'),
(675, 9, 131, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-12-18 18:30:00'),
(676, 4, 131, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2025-01-17 18:30:00'),
(677, 4, 131, 1, 'Average product, decent for the price but not extraordinary.', '2024-05-25 18:30:00'),
(678, 4, 131, 3, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-11-13 18:30:00'),
(679, 2, 131, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2025-01-25 18:30:00'),
(680, 6, 131, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-12-09 18:30:00'),
(681, 7, 132, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-04-16 18:30:00'),
(682, 4, 132, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-03-13 18:30:00'),
(683, 7, 132, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-11-08 18:30:00'),
(684, 10, 132, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2025-02-26 18:30:00'),
(685, 5, 132, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-03-19 18:30:00'),
(686, 2, 132, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2025-02-15 18:30:00'),
(687, 5, 132, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-06-01 18:30:00'),
(688, 10, 132, 2, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2025-01-19 18:30:00'),
(689, 5, 132, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-04-16 18:30:00'),
(690, 10, 132, 1, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-09-28 18:30:00'),
(691, 4, 132, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2025-02-24 18:30:00'),
(692, 9, 132, 3, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-10-31 18:30:00'),
(693, 10, 132, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-05-06 18:30:00'),
(694, 10, 132, 3, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-11-02 18:30:00'),
(695, 4, 132, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-05-27 18:30:00'),
(696, 10, 132, 3, 'Amazing product. I use it daily and love it. Great value for money.', '2025-01-02 18:30:00'),
(697, 4, 132, 2, 'Amazing product. I use it daily and love it. Great value for money.', '2024-12-05 18:30:00'),
(698, 4, 133, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-12-30 18:30:00'),
(699, 2, 133, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-12-27 18:30:00'),
(700, 2, 133, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-10-25 18:30:00'),
(701, 8, 133, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-09-14 18:30:00'),
(702, 5, 133, 2, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-12-31 18:30:00'),
(703, 7, 133, 3, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-08-28 18:30:00'),
(704, 3, 133, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-05-21 18:30:00'),
(705, 7, 133, 2, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-10-29 18:30:00'),
(706, 10, 133, 2, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-05-06 18:30:00'),
(707, 9, 133, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2025-02-26 18:30:00'),
(708, 5, 133, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-05-27 18:30:00'),
(709, 3, 133, 1, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2025-01-11 18:30:00'),
(710, 2, 133, 2, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-06-08 18:30:00'),
(711, 5, 133, 4, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-07-15 18:30:00'),
(712, 2, 133, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-07-22 18:30:00'),
(713, 10, 133, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-06-11 18:30:00'),
(714, 4, 133, 5, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-10-05 18:30:00'),
(715, 5, 134, 3, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-10-21 18:30:00'),
(716, 6, 134, 2, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-06-05 18:30:00'),
(717, 5, 134, 3, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-10-13 18:30:00'),
(718, 1, 134, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2025-03-10 18:30:00'),
(719, 2, 134, 2, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-03-26 18:30:00'),
(720, 3, 134, 3, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-06-30 18:30:00'),
(721, 4, 134, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2025-02-11 18:30:00'),
(722, 4, 134, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-04-10 18:30:00'),
(723, 9, 134, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-02-23 18:30:00'),
(724, 5, 134, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-04-16 18:30:00'),
(725, 5, 134, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-07-23 18:30:00'),
(726, 7, 134, 1, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-11-14 18:30:00'),
(727, 7, 134, 1, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-11-17 18:30:00'),
(728, 5, 134, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2025-01-11 18:30:00'),
(729, 8, 134, 4, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2025-01-20 18:30:00'),
(730, 2, 134, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-08-18 18:30:00'),
(731, 3, 134, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2025-01-31 18:30:00'),
(732, 5, 137, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-03-31 18:30:00'),
(733, 5, 137, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2025-02-03 18:30:00'),
(734, 7, 137, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2025-03-07 18:30:00'),
(735, 10, 137, 4, 'Average product, decent for the price but not extraordinary.', '2024-08-06 18:30:00'),
(736, 6, 137, 1, 'Average product, decent for the price but not extraordinary.', '2025-01-09 18:30:00'),
(737, 9, 137, 3, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-11-04 18:30:00'),
(738, 8, 137, 3, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-10-10 18:30:00'),
(739, 4, 137, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-03-27 18:30:00'),
(740, 2, 137, 2, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-08-02 18:30:00'),
(741, 6, 137, 4, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-07-25 18:30:00'),
(742, 1, 137, 4, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-05-28 18:30:00'),
(743, 6, 137, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-04-11 18:30:00'),
(744, 10, 137, 3, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-07-05 18:30:00'),
(745, 7, 137, 5, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-03-20 18:30:00'),
(746, 4, 137, 5, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-10-11 18:30:00'),
(747, 5, 137, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-10-20 18:30:00'),
(748, 9, 137, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-06-28 18:30:00'),
(749, 1, 138, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-05-06 18:30:00'),
(750, 1, 138, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-03-31 18:30:00'),
(751, 1, 138, 4, 'Average product, decent for the price but not extraordinary.', '2024-05-15 18:30:00'),
(752, 4, 138, 2, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-08-21 18:30:00'),
(753, 8, 138, 2, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-07-22 18:30:00'),
(754, 10, 138, 5, 'Average product, decent for the price but not extraordinary.', '2024-12-25 18:30:00'),
(755, 9, 138, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-04-20 18:30:00'),
(756, 10, 138, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-01-17 18:30:00'),
(757, 3, 138, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-04-16 18:30:00'),
(758, 8, 138, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-11-30 18:30:00'),
(759, 7, 138, 2, 'Average product, decent for the price but not extraordinary.', '2024-09-30 18:30:00'),
(760, 1, 138, 4, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-04-22 18:30:00'),
(761, 7, 138, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-12-21 18:30:00'),
(762, 10, 138, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-10-29 18:30:00'),
(763, 10, 138, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2025-01-10 18:30:00'),
(764, 2, 138, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-07-26 18:30:00'),
(765, 3, 138, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-08-30 18:30:00'),
(766, 10, 141, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-08-30 18:30:00'),
(767, 4, 141, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2025-02-01 18:30:00'),
(768, 6, 141, 2, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-10-04 18:30:00'),
(769, 6, 141, 3, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-05-08 18:30:00'),
(770, 6, 141, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-10-06 18:30:00'),
(771, 10, 141, 1, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-02-12 18:30:00'),
(772, 2, 141, 4, 'Amazing product. I use it daily and love it. Great value for money.', '2024-10-19 18:30:00'),
(773, 10, 141, 5, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-06-19 18:30:00'),
(774, 7, 141, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-01-19 18:30:00'),
(775, 7, 141, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-01-19 18:30:00'),
(776, 4, 141, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-12-11 18:30:00'),
(777, 6, 141, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-07-28 18:30:00'),
(778, 7, 141, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-12-22 18:30:00'),
(779, 10, 141, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-11-20 18:30:00'),
(780, 2, 141, 2, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-04-03 18:30:00'),
(781, 5, 141, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2025-01-08 18:30:00'),
(782, 6, 141, 3, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-03-22 18:30:00'),
(783, 6, 142, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-08-04 18:30:00'),
(784, 3, 142, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-07-15 18:30:00'),
(785, 10, 142, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-06-23 18:30:00'),
(786, 3, 142, 4, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-12-20 18:30:00'),
(787, 2, 142, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-03-19 18:30:00'),
(788, 5, 142, 4, 'Solid product. Worth considering if you need something reliable and efficient.', '2025-02-17 18:30:00'),
(789, 1, 142, 3, 'Average product, decent for the price but not extraordinary.', '2024-08-20 18:30:00'),
(790, 3, 142, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2025-01-04 18:30:00'),
(791, 5, 142, 4, 'Average product, decent for the price but not extraordinary.', '2024-04-08 18:30:00'),
(792, 1, 142, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-04-27 18:30:00'),
(793, 7, 142, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-01-03 18:30:00'),
(794, 3, 142, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-08-04 18:30:00'),
(795, 9, 142, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-12-14 18:30:00'),
(796, 7, 142, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-08-08 18:30:00'),
(797, 5, 142, 2, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-02-02 18:30:00'),
(798, 2, 142, 2, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-05-09 18:30:00'),
(799, 7, 142, 2, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-09-16 18:30:00'),
(800, 6, 143, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-05-31 18:30:00'),
(801, 7, 143, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-07-01 18:30:00'),
(802, 4, 143, 3, 'Not fully satisfied. The product works but the build quality could be improved.', '2025-02-26 18:30:00'),
(803, 6, 143, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-11-16 18:30:00'),
(804, 1, 143, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-07-13 18:30:00'),
(805, 1, 143, 3, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-08-22 18:30:00'),
(806, 3, 143, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-08-09 18:30:00'),
(807, 4, 143, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2025-01-18 18:30:00'),
(808, 9, 143, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-08-05 18:30:00'),
(809, 9, 143, 3, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-11-18 18:30:00'),
(810, 1, 143, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-12-01 18:30:00'),
(811, 7, 143, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-01-18 18:30:00'),
(812, 8, 143, 1, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-05-13 18:30:00'),
(813, 3, 143, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2025-01-15 18:30:00'),
(814, 4, 143, 2, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-09-22 18:30:00'),
(815, 8, 143, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-06-29 18:30:00'),
(816, 3, 143, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-04-28 18:30:00'),
(817, 9, 144, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-11-22 18:30:00'),
(818, 2, 144, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-05-20 18:30:00'),
(819, 4, 144, 2, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-10-08 18:30:00'),
(820, 4, 144, 5, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-06-13 18:30:00'),
(821, 3, 144, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-07-03 18:30:00'),
(822, 1, 144, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-10-02 18:30:00'),
(823, 1, 144, 3, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2025-02-06 18:30:00'),
(824, 9, 144, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-04-03 18:30:00'),
(825, 10, 144, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-05-16 18:30:00'),
(826, 8, 144, 2, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-11-01 18:30:00'),
(827, 5, 144, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-05-02 18:30:00'),
(828, 4, 144, 2, 'Not fully satisfied. The product works but the build quality could be improved.', '2024-07-22 18:30:00'),
(829, 10, 144, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-09-04 18:30:00'),
(830, 1, 144, 3, 'Average product, decent for the price but not extraordinary.', '2024-09-09 18:30:00'),
(831, 9, 144, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-03-16 18:30:00'),
(832, 4, 144, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-09-16 18:30:00'),
(833, 7, 144, 2, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-12-19 18:30:00'),
(834, 9, 147, 1, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-12-18 18:30:00'),
(835, 1, 147, 4, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-04-22 18:30:00'),
(836, 4, 147, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-05-08 18:30:00'),
(837, 4, 147, 4, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-10-08 18:30:00'),
(838, 1, 147, 5, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2025-01-01 18:30:00'),
(839, 5, 147, 3, 'Average product, decent for the price but not extraordinary.', '2024-10-01 18:30:00'),
(840, 5, 147, 3, 'Amazing product. I use it daily and love it. Great value for money.', '2024-10-19 18:30:00'),
(841, 8, 147, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-08-06 18:30:00'),
(842, 8, 147, 2, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-02-25 18:30:00'),
(843, 5, 147, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2025-01-14 18:30:00'),
(844, 9, 147, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-05-10 18:30:00'),
(845, 2, 147, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-09-01 18:30:00'),
(846, 10, 147, 2, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-08-30 18:30:00'),
(847, 8, 147, 3, 'Exceeded my expectations. Absolutely perfect and well built.', '2025-03-10 18:30:00'),
(848, 5, 147, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-12-03 18:30:00'),
(849, 10, 147, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-04-25 18:30:00'),
(850, 7, 147, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-09-12 18:30:00'),
(851, 1, 148, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-04-07 18:30:00'),
(852, 2, 148, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-09-06 18:30:00'),
(853, 8, 148, 3, 'Average product, decent for the price but not extraordinary.', '2025-01-07 18:30:00'),
(854, 6, 148, 2, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-07-11 18:30:00'),
(855, 1, 148, 4, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-04-14 18:30:00'),
(856, 5, 148, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-09-29 18:30:00'),
(857, 4, 148, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-04-24 18:30:00'),
(858, 2, 148, 2, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2025-02-04 18:30:00'),
(859, 6, 148, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-05-13 18:30:00'),
(860, 8, 148, 3, 'The product is fine but I expected better durability. Still satisfied overall.', '2025-02-14 18:30:00'),
(861, 4, 148, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-08-08 18:30:00'),
(862, 8, 148, 2, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-02-22 18:30:00'),
(863, 2, 148, 2, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-10-01 18:30:00'),
(864, 6, 148, 5, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-11-19 18:30:00'),
(865, 1, 148, 5, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-08-19 18:30:00'),
(866, 10, 148, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-10-18 18:30:00'),
(867, 10, 148, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-04-06 18:30:00'),
(868, 6, 149, 4, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-05-19 18:30:00'),
(869, 3, 149, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-03-17 18:30:00'),
(870, 10, 149, 2, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-08-22 18:30:00'),
(871, 5, 149, 4, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-07-05 18:30:00'),
(872, 6, 149, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2025-01-14 18:30:00'),
(873, 2, 149, 4, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2025-02-22 18:30:00'),
(874, 2, 149, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2025-01-22 18:30:00'),
(875, 4, 149, 5, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2025-02-24 18:30:00'),
(876, 6, 149, 5, 'Average product, decent for the price but not extraordinary.', '2025-01-08 18:30:00'),
(877, 5, 149, 5, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-06-22 18:30:00'),
(878, 2, 149, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-03-13 18:30:00'),
(879, 10, 149, 2, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2025-02-06 18:30:00'),
(880, 4, 149, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-06-01 18:30:00'),
(881, 1, 149, 3, 'Average product, decent for the price but not extraordinary.', '2024-09-15 18:30:00'),
(882, 1, 149, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-01-11 18:30:00'),
(883, 8, 149, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-06-21 18:30:00'),
(884, 4, 149, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-06-26 18:30:00'),
(885, 4, 150, 4, 'Solid product. Worth considering if you need something reliable and efficient.', '2025-01-26 18:30:00'),
(886, 4, 150, 3, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-06-09 18:30:00'),
(887, 5, 150, 3, 'Good quality and performance. Met my expectations and was delivered on time.', '2025-03-02 18:30:00'),
(888, 5, 150, 3, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2024-10-17 18:30:00'),
(889, 8, 150, 5, 'Great product for daily use. I have been using it for a week and it works flawlessly.', '2025-01-19 18:30:00'),
(890, 3, 150, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-12-27 18:30:00'),
(891, 8, 150, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-10-09 18:30:00'),
(892, 2, 150, 1, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2025-01-17 18:30:00'),
(893, 9, 150, 3, 'Amazing product. I use it daily and love it. Great value for money.', '2024-08-24 18:30:00'),
(894, 3, 150, 1, 'Not as good as advertised. Disappointed in the performance and quality.', '2025-02-27 18:30:00'),
(895, 6, 150, 2, 'Best purchase I have made recently. Worth every penny. Totally satisfied with it.', '2024-04-27 18:30:00'),
(896, 4, 150, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-07-06 18:30:00'),
(897, 3, 150, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2025-03-01 18:30:00'),
(898, 6, 150, 4, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2024-06-29 18:30:00'),
(899, 4, 150, 5, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-06-24 18:30:00'),
(900, 8, 150, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-03-04 18:30:00'),
(901, 1, 150, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-06-27 18:30:00'),
(902, 6, 151, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-07-04 18:30:00'),
(903, 6, 151, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2024-03-22 18:30:00'),
(904, 3, 151, 4, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-10-31 18:30:00'),
(905, 7, 151, 4, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-07-15 18:30:00'),
(906, 5, 151, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-10-10 18:30:00'),
(907, 10, 151, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-09-26 18:30:00'),
(908, 6, 151, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-11-20 18:30:00'),
(909, 2, 151, 5, 'Fantastic! Will definitely buy more. Quality is unmatched and looks very nice.', '2025-02-26 18:30:00'),
(910, 3, 151, 5, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-08-05 18:30:00'),
(911, 1, 151, 4, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-05-20 18:30:00'),
(912, 9, 151, 5, 'Solid product. Worth considering if you need something reliable and efficient.', '2024-09-06 18:30:00'),
(913, 9, 151, 1, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-08-10 18:30:00'),
(914, 3, 151, 3, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-03-24 18:30:00'),
(915, 5, 151, 5, 'Amazing product. I use it daily and love it. Great value for money.', '2024-12-07 18:30:00'),
(916, 2, 151, 5, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-12-03 18:30:00'),
(917, 8, 151, 4, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-09-11 18:30:00'),
(918, 2, 151, 2, 'Amazing product. I use it daily and love it. Great value for money.', '2024-09-18 18:30:00'),
(919, 8, 152, 2, 'Amazing product. I use it daily and love it. Great value for money.', '2024-09-03 18:30:00'),
(920, 9, 152, 1, 'Nice product, works as intended. Happy with the purchase and would recommend.', '2024-04-07 18:30:00'),
(921, 7, 152, 5, 'Amazing! Really happy with my purchase. Great value for money and looks great as well.', '2025-03-08 18:30:00'),
(922, 3, 152, 2, 'Average product, decent for the price but not extraordinary.', '2024-04-04 18:30:00'),
(923, 6, 152, 5, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-05-26 18:30:00'),
(924, 7, 152, 2, 'The product is fine but I expected better durability. Still satisfied overall.', '2024-03-25 18:30:00'),
(925, 6, 152, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-09-07 18:30:00'),
(926, 2, 152, 3, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-11-15 18:30:00'),
(927, 4, 152, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2025-01-13 18:30:00'),
(928, 1, 152, 2, 'Exceptional quality! Very durable and well designed. Would recommend to everyone who needs this kind of product.', '2024-08-15 18:30:00'),
(929, 7, 152, 5, 'Not as good as advertised. Disappointed in the performance and quality.', '2024-08-18 18:30:00'),
(930, 8, 152, 3, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-12-10 18:30:00'),
(931, 1, 152, 1, 'Exceeded my expectations. Absolutely perfect and well built.', '2024-08-01 18:30:00'),
(932, 10, 152, 4, 'Absolutely loved this product! The quality is top-notch and exceeded my expectations. Will definitely purchase again.', '2024-11-23 18:30:00'),
(933, 7, 152, 3, 'It’s an okay product, does what it says. Could use some improvements in design though.', '2024-06-26 18:30:00'),
(934, 6, 152, 4, 'Good quality and performance. Met my expectations and was delivered on time.', '2024-03-22 18:30:00'),
(935, 2, 152, 3, 'Very good item. The delivery was fast and the packaging was excellent. Highly recommended!', '2024-05-23 18:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `wishlist_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `added_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`wishlist_id`, `customer_id`, `product_id`, `added_at`) VALUES
(4, 4, 4, '2025-02-03 18:30:00'),
(7, 7, 7, '2025-02-06 18:30:00'),
(8, 8, 8, '2025-02-07 18:30:00'),
(9, 9, 9, '2025-02-08 18:30:00'),
(10, 10, 10, '2025-02-09 18:30:00'),
(12, 2, 2, '2025-02-01 18:30:00'),
(14, 4, 4, '2025-02-03 18:30:00'),
(17, 7, 7, '2025-02-06 18:30:00'),
(18, 8, 8, '2025-02-07 18:30:00'),
(19, 9, 9, '2025-02-08 18:30:00'),
(20, 10, 10, '2025-02-09 18:30:00'),
(154, 1, 74, '2025-03-26 11:15:48'),
(155, 1, 132, '2025-03-26 11:15:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `admin_email` (`admin_email`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`),
  ADD UNIQUE KEY `customer_email` (`customer_email`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`order_item_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`wishlist_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=153;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=936;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `wishlist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=158;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
