drop database if exists burgers_db;

create database burgers_db;

use burgers_db;

create table burgers (
    id int not null auto_increment,
    name varchar(255) not null,
    devoured boolean default false,
    primary key (id)
);


select * from burgers;

update burgers set devoured = false where devoured = true;