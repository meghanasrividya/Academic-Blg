-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: academic_blog
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (13,'? Exploring the Future of AI in Academia','Artificial Intelligence is transforming research and education in profound ways...','2025-03-24 18:12:31','2025-03-24 18:12:31',1,0),(14,'? The Importance of Open Access Journals','Open Access publishing democratizes knowledge, allowing wider dissemination of research...','2025-03-24 18:12:31','2025-03-24 18:12:31',1,0),(15,'? Neuroscience Meets Computer Science','Interdisciplinary research is opening doors to breakthroughs in understanding cognition...','2025-03-24 18:12:31','2025-03-24 18:12:31',1,0),(16,'? Climate Change and Data Modeling','Data science plays a key role in predicting climate scenarios and influencing policy...','2025-03-24 18:12:31','2025-03-24 18:12:31',1,0),(17,'? Genomics and Machine Learning','The fusion of genomics and AI is accelerating disease detection and personalized medicine...','2025-03-24 18:12:31','2025-03-24 18:12:31',1,0),(18,'? Exploring the Future of AI in Academia','Artificial Intelligence is transforming research and education in profound ways...','2025-03-24 18:19:53','2025-03-24 18:19:53',1,0),(19,'? The Importance of Open Access Journals','Open Access publishing democratizes knowledge, allowing wider dissemination of research...','2025-03-24 18:19:53','2025-03-24 18:19:53',1,0),(20,'? Neuroscience Meets Computer Science','Interdisciplinary research is opening doors to breakthroughs in understanding cognition...','2025-03-24 18:19:53','2025-03-24 18:19:53',1,0),(21,'? Climate Change and Data Modeling','Data science plays a key role in predicting climate scenarios and influencing policy...','2025-03-24 18:19:53','2025-03-24 18:19:53',1,0),(22,'? Genomics and Machine Learning','The fusion of genomics and AI is accelerating disease detection and personalized medicine...','2025-03-24 18:19:53','2025-03-24 18:19:53',1,0),(23,'? Exploring the Future of AI in Academia','Artificial Intelligence is transforming research and education in profound ways...','2025-03-24 18:34:09','2025-03-24 18:34:09',1,0),(24,'? The Importance of Open Access Journals','Open Access publishing democratizes knowledge, allowing wider dissemination of research...','2025-03-24 18:34:09','2025-03-24 18:34:09',1,0),(25,'? Neuroscience Meets Computer Science','Interdisciplinary research is opening doors to breakthroughs in understanding cognition...','2025-03-24 18:34:09','2025-03-24 18:34:09',1,0),(26,'? Climate Change and Data Modeling','Data science plays a key role in predicting climate scenarios and influencing policy...','2025-03-24 18:34:09','2025-03-24 18:34:09',1,0),(27,'? Genomics and Machine Learning','The fusion of genomics and AI is accelerating disease detection and personalized medicine...','2025-03-24 18:34:09','2025-03-24 18:34:09',1,0);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20250322220031-create-comment.js'),('20250323135239-create-user.js'),('20250323135242-create-post.js'),('20250323151200-add-likes-to-posts.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Meghana','meghanar19@gmail.com','$2b$10$hh5D2e7LJ/sJE8oW490Q5ugG3DqpfvTgIHHCGpnYuRT.Vzvh3Mp9.',NULL,'2025-03-23 14:01:10','2025-03-23 14:01:10'),(2,'Rama','ramawithu@gmail.com','$2b$10$MkytUTgaFMX4LWAGz6cadefybJi5zUb7eIQlLC83hBh1hduWqyc72',NULL,'2025-03-23 14:03:19','2025-03-23 14:03:19'),(3,'Meghana','meghanasrividya@gmail.com','$2b$10$AEVgV4Jqr02k/24i9RIsZ.fE7NsfhXcURIDUYN7C2CXFr13oCoDPa',NULL,'2025-03-23 15:42:57','2025-03-23 15:42:57'),(4,'lawrence','lawrence@gmail.com','$2b$10$6KSDUvm06H2Cuog3.6zIaOLyeMqD4OxIo3K9kLc3PJE/CdHYXmV/q',NULL,'2025-03-23 16:53:19','2025-03-23 16:53:19');
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

-- Dump completed on 2025-03-24 19:33:10
