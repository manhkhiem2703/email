-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: wpr2201040033
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'123123','john.doe@example.com','$2a$10$SmRZyuMjshbuKJAgYO.hue5LEpBYouVRS5JPM6XxRPqbVaRkTJsFe','2024-11-07 01:03:59'),(2,'kids','test@gmail.com','$2a$10$eOVrSw3x2IQHczrauAkBJeAgh3Do3PNJpDqLXIUzhL45P86SzJI8a','2024-11-07 01:04:21'),(3,'kids','test1@gmail.com','$2a$10$OiY.N1Jv0etXuQdLQq5I5OD6K474m43V.6dPtVXFMDJBA8e40mFra','2024-11-07 01:04:32'),(4,'123123','demo@gmail.com','$2a$10$eAtxswTK5j6bsVi0CRYOdOvj.3KKG3kBjHpUHNWbEZOwQ7H/XAeNO','2024-11-07 01:04:47'),(5,'kids','dem1o@gmail.com','$2a$10$kNJ4810iPlmh9gfS3.oIveEVgZqdDTxQKRjzd.vX6ozDMp2xC5BQe','2024-11-07 01:04:59'),(6,'123123','demo3@gmail.com','$2a$10$s759zxig1.SizKAPvk3sGuuI2mBqMNxTK3/y4Jui1styoOK799sg.','2024-11-07 01:05:11'),(7,'kids','demo5@gmail.com','$2a$10$rSERiJ5NiVkWIM0llJHVvOkzoM6qFs6/zwJ0hZUmW5p3to4dCA2tW','2024-11-07 01:05:35'),(8,'kidssfssfd','demo6@gmail.com','$2a$10$uvhHSPJPRekY7qUNu0YDMOwQFLk.ONtXawdrojS30bj8LpBNkrzBu','2024-11-07 01:05:51'),(9,'cffa','john.doe44@example.com','$2a$10$aW/M7v2ybNOUyOv/XwBb8uaZIqsSlBW9eiYs8GOIPx3jBI13BDjHC','2024-11-07 01:06:33');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-07  8:17:12
