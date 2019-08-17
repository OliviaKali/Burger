drop database if exists  esnndb682o2ahp8t;

create database esnndb682o2ahp8t;

use esnndb682o2ahp8t;

create table burgers (
    id int not null auto_increment,
    name varchar(255) not null,
    devoured boolean default false,
    primary key (id)
);

