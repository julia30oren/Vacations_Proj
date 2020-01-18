-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: vacation_project
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id_admin`),
  UNIQUE KEY `password_UNIQUE` (`password`),
  UNIQUE KEY `id_admin_UNIQUE` (`id_admin`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Admin','123456789');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `password` varchar(150) NOT NULL,
  `likes` json DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'pavel@gmail.com','Pavel','Orend','$2a$10$1vP3VJu2R6uWjC9RtGFBkOkSUzlBxqtkdW81RcNDci.SEvYMerrxi','[2, 4]'),(2,'juliaoren30@gmail.com','Julia','Oren','$2a$10$Tvm9XcWhkpLaRUsd/2zYnOYEK7UcZNBMhvbS4zZlyCXWOR4M8IokS','[5, 13, 10]'),(3,'myNewReg@email.il','Sam','Winchester','$2a$10$J8raI71e2uTDKS9FZKZXwukMfoZIQ.7ymOwUEKPmxzMD0o.uTAPIS','[8, 3]'),(4,'suny30@gove.il','Suny','Ures','$2a$10$I8zyYbSImGGVpRqfPzhpNuZnS4aqxSFunNhwm1EKIZ1RxN.0NE1zi','[2, 11, 4, 8, 5]'),(5,'blue@gmail.com','Blue','Green','$2a$10$FzFMC1ar7jTWVEuRxK1VoevBgIR.hAT3b8edtfS.DWsXVZsKQlAQ2','[2, 3]'),(6,'aaaaaaaa@gmail.com','AAAA','aaaa','$2a$10$B/tthms4Qy.AMzM8affm7.AZBUCewOUibgbtmY27AuKQXBUyGVyya','[13]');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vacation_names` varchar(45) NOT NULL,
  `vacation_descriptions` varchar(400) NOT NULL,
  `vacation_prices` varchar(45) NOT NULL,
  `vacation_start` varchar(45) NOT NULL,
  `vacation_end` varchar(45) NOT NULL,
  `vacation_pictures` varchar(200) NOT NULL,
  `likes` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (2,'Budapest','Budapest, the capital of Hungary and considered by many to be the \"Paris of the East,\" is one of the most culturally important metropolises in Eastern Europe, and is home to numerous UNESCO World Heritage Sites. Although humans have lived here since the Stone Age.','189','01/08/2020','21/08/2020','https://handluggageonly.co.uk/wp-content/uploads/2018/01/Hand-Luggage-Only-9-10.jpg',23),(3,'Las Vegas','Las Vegas is an internationally renowned major resort city, known primarily for its gambling, shopping, fine dining, entertainment, and nightlife. The Las Vegas Valley as a whole serves as the leading financial, commercial, and cultural center for Nevada. ','200','01/11/2020','13/11/2020','https://www.sweetdeals.com/shared/superadmin/content/images/dynamic/deal/9002443/offer-image-9002443-3KViRfvbqh-1559823807.jpg',23),(4,'Prague','Prague is the equal of Paris in terms of beauty. Its history goes back a millennium. And the beer? The best in Europe.','199','11/08/2020','21/08/2020','https://lonelyplanetwp.imgix.net/2019/06/OldTownSquare-017709d47443.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748',12),(5,'Canada','Canada has a large domestic and foreign tourism industry. The second largest country in the world, Canada`s incredible geographical variety is a significant tourist attractor.','231','17/09/2020','29/09/2020','https://www.planetware.com/photos-large/CDN/canada-banff-national-park-moraine-lake-2.jpg',8),(8,'Paris','Paris received 24.5 million visitors in 2018, measured by hotel stays, with the largest numbers of foreign visitors coming from the United States, the United Kingdom, Germany and China.[12] It was ranked as the second most visited travel destination in the world in 2018, after Bangkok.','204','19/08/2021','23/08/2021','https://www.jetsetter.com/uploads/sites/7/2019/04/GettyImages-924894324-1380x690.jpg',31),(9,'Lviv','Mysterious and architecturally lovely, this Unesco-listed city is the country’s least Soviet and exudes the same authentic Central European charm as pretourism Prague or Kraków once did.','115','17/03/2020','23/03/2020','https://www.mywanderlust.pl/wp-content/uploads/2018/08/travel-to-lviv-ukraine-121.jpg',11),(10,'Sri Lanka','Beach lovers can finally explore the finest tropical sandy beaches, experience jungle trekking and wild life safaris, visit ancient places with historical values and learn more about how Sri Lankan ancestors lived back then and the unmatched beauty in hill country.','99','28/04/2020','13/05/2020','https://static.toiimg.com/photo/69953924.cms.cms',7),(11,'Israel','Explore a side of Israel you never knew existed, learn about the impact Israel is making. Head off the beaten tourist-path to experience sides of Israel rarely seen.','174','21/08/2020','31/08/2020','https://www.touristisrael.com/wp-content/uploads/bigstock-Panorama-of-Jerusalem-old-city-848642421.jpg',11),(12,'Punta Cana','It is the most sought after tourist destination of the Caribbean and known for its beautiful and pristine beaches.','117','17/06/2020','29/06/2020','https://r-cf.bstatic.com/images/hotel/max1024x768/202/202255330.jpg',7),(13,'Courchevel ','Courchevel is a French Alps ski resort. It is a part of Les Trois Vallées, the largest linked ski areas in the world. ','112','17/11/2020','29/11/2020','https://www.courchevel.com/sites/default/files/objets_touristiques/2018-12/5101171.jpg',9);
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-18 16:56:15
