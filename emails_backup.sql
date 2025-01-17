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
-- Table structure for table `emails`
--

DROP TABLE IF EXISTS `emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender_email` varchar(255) NOT NULL,
  `receiver_email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `sent_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emails`
--

LOCK TABLES `emails` WRITE;
/*!40000 ALTER TABLE `emails` DISABLE KEYS */;
INSERT INTO `emails` VALUES (1,'john.doe@example.com','manhkhiem2703@gmail.com','13123','123123','uploads\\365e0c07c86a185608ff75d0e1f118b1','2024-11-07 01:08:35'),(2,'john.doe@example.com','test2@gmail.com','123123','123123','uploads\\577d9b08eb9ff3bd4922c28b01291208','2024-11-07 01:09:04'),(3,'john.doe@example.com','john.doe@example.com','john.doe@example.com','john.doe@example.com','uploads\\4914ae051bc2f486e0dad89451da228e','2024-11-07 01:09:21'),(4,'john.doe@example.com','test3@gmail.com','test3@gmail.com','test3@gmail.com',NULL,'2024-11-07 01:09:40'),(5,'john.doe@example.com','test3@gmail.com','test3@gmail.com','test3@gmail.com','uploads\\277f49c0f70bb2d08d102f85711061f7','2024-11-07 01:09:52'),(6,'john.doe@example.com','test3@gmail.com','test3@gmail.com','test3@gmail.com','uploads\\b16d638c0e7c1c6c6af182063225dde3','2024-11-07 01:10:01'),(7,'john.doe@example.com','manhkhiem2703@gmail.com','manhkhiem2703@gmail.com','manhkhiem2703@gmail.com','uploads\\8c9e8da1ecccfd08c25bdf980516b5a7','2024-11-07 01:10:56'),(8,'john.doe@example.com','manhkhiem2703@gmail.com','manhkhiem2703@gmail.com','manhkhiem2703@gmail.com','uploads\\9f890344ac4801f668eff0b2726baff3','2024-11-07 01:11:05'),(9,'test@gmail.com','manhkhiem2703@gmail.com','123123','12','uploads\\402fc90b69e4c952620d3b3955b904d9','2024-11-07 01:12:14'),(10,'test@gmail.com','manhkhiem2703@gmail.com','123123','123123','uploads\\94852841750a1aad5faaa3b6ed800a10','2024-11-07 01:12:22'),(11,'test@gmail.com','manhkhiem2703@gmail.com','123123','123123','uploads\\c6d4cd14c5bbbfd07f8f74b1236bd33c','2024-11-07 01:12:31'),(12,'john.doe@example.com','test@gmail.com','123123','123123','uploads\\9adef13052e3c8f595a3d698d817b830','2024-11-07 01:12:55'),(13,'john.doe@example.com','test@gmail.com','13123','123123','uploads\\e71da59836c77e3a2abd53940284181a','2024-11-07 01:13:04'),(14,'john.doe@example.com','test@gmail.com','TEST','aadas','uploads\\963141957b9bdcf0cf38e93ea4fcd1ff','2024-11-07 01:13:16'),(15,'john.doe@example.com','test@gmail.com','123123','123123123123','uploads\\92535ed051663561b29e8516080df3c9','2024-11-07 01:13:40'),(16,'john.doe@example.com','test@gmail.com','123123','flsdhfhsdjklf','uploads\\2f2d8d5752c26a086c542110502368ad','2024-11-07 01:13:58'),(17,'test@gmail.com','john.doe@example.com','test3@gmail.com','db','uploads\\7d42a03041660f3d7214b9f6c726b920','2024-11-07 01:14:32'),(18,'test@gmail.com','john.doe@example.com','john.doe@example.com','john.doe@example.com','uploads\\7a0807e0d33cf90c6fda5d60e629092e','2024-11-07 01:14:55');
/*!40000 ALTER TABLE `emails` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-07  8:16:29
