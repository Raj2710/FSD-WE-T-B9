use guvi;

select * from users;
select * from address;

select distinct(city) from address;
select count(*) from address;

select city, count(city), sum(userId), min(userId), max(userId), avg(userId) from address group by city having city = 'Utah';


alter table address
modify column addressLine2 varchar(255) default '2nd Main Road'; 

alter table address
add column addressLine3 varchar(255) default 'Tambaram City';


alter table address
drop column addressLine3;

insert into address(addressLine,city,state,zipcode,userId) values
('321,East Tambaram','Tambaram','Tamil Nadu', '600073',1);

insert into users(firstName, lastName, email, mobile) values 
('Priya','Dharan','pd@hotmail.com', '1234567890'),
('Mani','Kuttan','mani@gmail.com','6667778889');


select users.id, users.firstName, users.lastName, users.email, address.addressLine, address.city from users 
join address on users.id = address.userId where
users.status = true;

select * from  users left join address on users.id = address.userId where
users.status = true;








