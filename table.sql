create table types_of_cars (
	id serial not null primary key,
   car_type text not null
);

create table my_users(
    id serial not null primary key,
    type_of_user text not null,
    name text not null,
    location text not null,
    car_type text not null,
    service_type text not null

);

create table types_of_services (
    service_type text not null,
   price decimal(10,2)

);