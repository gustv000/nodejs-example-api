create database nodejs_example;

use nodejs_example;

create table products (
    id int(11) not null auto_increment,
    name varchar(255) not null,
    primary key (id)
);
