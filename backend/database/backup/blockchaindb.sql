CREATE DATABASE IF NOT EXISTS blockchaindb DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
USE blockchaindb;


# Set names to utf-8
SET NAMES utf8;


# Create the blocks table
CREATE TABLE blockchaindb.blocks
(
    blockId VARCHAR(32) PRIMARY KEY NOT NULL,
    nonce INT(11) NOT NULL,
    data LONGTEXT NOT NULL,
    prevHash VARCHAR(32) NOT NULL,
    hash VARCHAR(32) NOT NULL
) DEFAULT CHARSET=utf8;