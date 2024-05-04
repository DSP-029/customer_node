-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: database
-- Generation Time: May 04, 2024 at 12:24 PM
-- Server version: 10.11.5-MariaDB-1:10.11.5+maria~ubu2204-log
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_customers`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `phone_number` int(20) NOT NULL,
  `gender` enum('male','female','other') NOT NULL,
  `address` text NOT NULL,
  `profile_photo` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `password`, `phone_number`, `gender`, `address`, `profile_photo`) VALUES
(19, 'DineshPal', 'dineshsingh.pal@radixweb.com', '$2b$10$c4rlW/jpTP/REFseFj.Qauo.TDnycpEEiyB1CFXmA.dcO1Aq7O/N6', 2147483647, 'male', 'Near Sardar patel Ring road Ahmedabad', ''),
(20, 'BrijM', 'brij@gmail.com', '$2b$10$l5wL2I8E65qbau2Q3TkAQeLIE8r30jXZPkthWH3LvXeLb/29fFs0i', 2147483647, 'male', '', ''),
(21, 'BrijM2', 'brij1235@gmail.com', '$2b$10$gc100.rONaenyuZG2byQZ.DCTplueMO3I7RP0P5wgNZ6eB/vE1VLC', 0, 'male', '', ''),
(24, 'DineshPal', 'dssdsdp@gmail.com', '$2b$10$JQTKNNRWwkCHCgl74lHIB.gI.7BnRY3fAlzAIi3B9iTI2UhzoZmIy', 2147483647, 'male', 'Near Sardar patel Ring road Ahmedabad', ''),
(25, 'DineshPal', 'dssdsdp@gmail.com', '$2b$10$bffR1eY2krwrPpOpo2oOSOGWW99tq3gbwf2vaW0U1FTMLVQSgUsXK', 2147483647, 'male', 'Near Sardar patel Ring road Ahmedabad', ''),
(26, 'DineshPal', 'dssdsdp@gmail.com', '$2b$10$Twwu3rXGrfDJjxfrJ8aEDOge1f1BUqkJgXP8/nxxqh9YqxH1ismBm', 2147483647, 'male', 'Near Sardar patel Ring road Ahmedabad', ''),
(27, 'DineshPal111', 'dssdsdp@gmail.com', '$2b$10$XKSu/5E2u2ngn9NUFNyIJ.5THwDrYgKMdN/sITLz7Cb7NI3Sn9vBS', 2147483647, 'male', 'Near Sardar patel Ring road Ahmedabad', ''),
(28, 'DineshPal111', 'dssdsdp@gmail.com', '$2b$10$E6GwSjFRD66RM3rrxnRmduXE/06nJQ8WZ8mrlMhUKpGmVdR2r.iSi', 2147483647, 'male', 'Near Sardar patel Ring road Ahmedabad', ''),
(29, 'DineshPal111', 'dssdsdp@gmail.com', '$2b$10$Oxc/DlbeCfDfBa/TglpdEupmu.QHj866aKD8R97HSu6/BPXtZTIqK', 2147483647, 'male', 'Near Sardar patel Ring road Ahmedabad', ''),
(30, 'DineshPal111', 'dssdsdp@gmail.com', '$2b$10$iWxFk2R09HAvd7VFbLL3lOD23sfYpKDri5vwLUDQCXM18eZHKrj3q', 2147483647, 'male', 'Near Sardar patel Ring road Ahmedabad', ''),
(31, 'DineshPal111', 'dssdsdp@gmail.com', '$2b$10$Q9BrApw253pCfZ0c8drkCeCcuLhIZXweZfu1dhHHsGc8zWpaRd0YC', 2147483647, 'male', 'Near Sardar patel Ring road Ahmedabad', ''),
(32, 'DineshPal111', 'dssdsdp@gmail.com', '$2b$10$B153e1P6Ig0QxoODu1Z1l.lJ.DjOCxDBcgOxQeNXJ2WyfwqDvG6bm', 2147483647, 'male', 'Near Sardar patel Ring road Ahmedabad', ''),
(33, 'DineshPal111', 'dssdsdp@gmail.com', '$2b$10$kBGpGoPcGsOB/0D5pNhRUurjSyMfQuo8qy/DWYcs5gIRu1h/PuPJG', 2147483647, 'male', 'Near Sardar patel Ring road Ahmedabad', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
