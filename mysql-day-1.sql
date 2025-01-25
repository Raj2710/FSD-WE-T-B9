-- create schema guvi;
-- use guvi;
create table users (
	id int,
    firstName varchar(255),
    lastName varchar(255),
    email varchar(255),
    mobile varchar(255),
    status bool
);

insert into users values
(1,'Naga','Raj','naga@gmail.com','123467689',true),
(2,'Prem','Kumar','prem@gmail.com','98764321',false),
(3,'Ajith','Kumar','ajith@outlook.com','0987654321',true),
(4,'Arjun','Prasanth','arjun@outlook.com','9876543211',true),
(5,'Yuvaraj','K','yuvaraj@gmail.com','98765456789',true);

select * from users;

insert into users(id,firstName,lastName,email,status) values 
(6,'Mullai','Balu','mullai@gmail.com',false),
(7,'Bharani','Dharan','bharani@gmail.com',true);

SET SQL_SAFE_UPDATES = 0;

update users 
set 
mobile = '9876543211',
email = 'mullai@outlook.com'
where id = 6;


select * from users where id = 1 and status=true;

delete from users;

drop table users;

-- Creating Database with constraints


create table users(
	id int unique not null auto_increment,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    email varchar(255) not null,
    mobile varchar(255),
    status bool not null default false,
    createdAt datetime default current_timestamp,
    primary key (id)
);

insert into users(firstName, lastName, email, mobile,status) values
('Naga','Raj','naga@gmail.com','123467689',true),
('Prem','Kumar','prem@gmail.com','98764321',false),
('Ajith','Kumar','ajith@outlook.com','0987654321',true),
('Arjun','Prasanth','arjun@outlook.com','9876543211',true),
('Yuvaraj','K','yuvaraj@gmail.com','98765456789',true);

select * from users;

insert into users(firstName,lastName,email) values 
('Mullai','Balu','mullai@gmail.com');

create table address(
	id int not null unique auto_increment,
    addressLine varchar(255) not null,
    city varchar(255) not null,
    state varchar(255) not null,
    zipcode varchar(6) not null,
    status bool default true,
    userId int not null,
    
    primary key (id),
    foreign key (userId) references users(id)
);

insert into address(addressLine, city, state, zipcode, userId) values
('123, East Street', 'New York City', 'New York','12345',1),
('23, West Street', 'New York City', 'New York','12345',2),
('22, North Street', 'New York City', 'New York','12345',3),
('45A, South Street', 'New York City', 'New York','12345',4),
('11, Center Street', 'New York City', 'New York','12345',5);

select * from address;

insert into address(addressLine, city, state, zipcode, userId) values
('123, East Street', 'New York City', 'New York','123456',7);

delete from address where userId = 7;

delete from users where id = 5;

