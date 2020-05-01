-- delete from film_cast;
-- delete from film_session;
-- delete from seat;
-- delete from theatre_row;
-- delete from hall;
-- delete from theatre;
-- delete from film;

-- --------------------------

insert into film(film_id, name, description, genre) values(1, "The Forever Purge", "The fifth and final installment of 'The Purge' film series.", "Horror");
insert into film(film_id, name, description, genre) values(2, "Tenet", "An action epic revolving around international espionage, time travel, and evolution. Possibly about a man trying to prevent World War 3 through time travel and rebirth.", "Thriller");
insert into film(film_id, name, description, genre) values(3, "Mulan", "A young Chinese maiden disguises herself as a male warrior in order to save her father", "Action");
insert into film(film_id, name, description, genre) values(4, "Wonder Woman 1984", "A sequel to the 2017 superhero film 'Wonder Woman.", "Fantasy");
insert into film(film_id, name, description, genre) values(5, "A Quiet Place Part II", "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path", "Sci-Fi");
insert into film(film_id, name, description, genre) values(6, "Godzilla vs. Kong", "As the gigantic Kong meets the unstoppable Godzilla, the world watches to see which one of them will become King of the Monsters.", "Thriller");
insert into film(film_id, name, description, genre) values(7, "The King's Man", "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.", "Adventure");
insert into film(film_id, name, description, genre) values(8, "The SpongeBob Movie: Sponge on the Run", "After SpongeBob's beloved pet snail Gary is snail-napped, he and Patrick embark on an epic adventure to The Lost City of Atlantic City to bring Gary home.", "Animation");
insert into film(film_id, name, description, genre) values(9, "No Time to Die", "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.", "Action");

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

insert into film_cast values (1, "Ana de la Reguera");
insert into film_cast values (1, "Leven Rambin");

insert into film_cast values (2, "Elizabeth Debicki");
insert into film_cast values (2, "Robert Pattinson");

insert into film_cast values (3, "Yifei Liu");
insert into film_cast values (3, "Donnie Yen");

insert into film_cast values (4, "Gal Gadot");
insert into film_cast values (4, "Chris Pine");

insert into film_cast values (5, "Emily Blunt");
insert into film_cast values (5, "Cillian Murphy");

insert into film_cast values (6, "Millie Bobby Brown");
insert into film_cast values (6, "Alexander Skarsgård");

insert into film_cast values (7, "Ralph Fiennes");
insert into film_cast values (7, "Harris Dickinson");

insert into film_cast values (8, "Keanu Reeves");
insert into film_cast values (8, "Awkwafina");

insert into film_cast values (9, "Daniel Craig");
insert into film_cast values (9, "Ana de Armas");

-----------------------------------------------------

insert into theatre(theatre_id, name, city, address) values (1, "Regal Fenway And RPX", "Boston", "201 Brookline Ave");
insert into theatre(theatre_id, name, city, address) values (2, "AMC Boston Common 19", "Boston", "175 Tremont St");
insert into theatre(theatre_id, name, city, address) values (3, "ShowPlace ICON Boston", "Boston", "60 Seaport Blvd UNIT 315");
insert into theatre(theatre_id, name, city, address) values (4, "AMC South Bay Center 12", "Dorchester", "25 District Ave");
insert into theatre(theatre_id, name, city, address) values (5, "Coolidge Corner Theatre", "Brookline", "290 Harvard St");

-----------------------------------------------------------------------------------------------------------------------------------

insert into hall(hall_id, name, theatre_id) values (1, "Hall A", 1);
insert into hall(hall_id, name, theatre_id) values (2, "Hall B", 1);

insert into hall(hall_id, name, theatre_id) values (3, "Hall A", 2);
insert into hall(hall_id, name, theatre_id) values (4, "Hall B", 2);

insert into hall(hall_id, name, theatre_id) values (5, "Hall A", 3);
insert into hall(hall_id, name, theatre_id) values (6, "Hall B", 3);

insert into hall(hall_id, name, theatre_id) values (7, "Hall A", 4);
insert into hall(hall_id, name, theatre_id) values (8, "Hall B", 4);

insert into hall(hall_id, name, theatre_id) values (9, "Hall A", 5);
insert into hall(hall_id, name, theatre_id) values (10, "Hall B", 5);

insert into hall(hall_id, name, theatre_id) values (11, "Hall C", 1);
insert into hall(hall_id, name, theatre_id) values (12, "Hall C", 2);

-----------------------------------------------------------------------

insert into theatre_row(row_id, row_index, seats, hall_id) values (1, 1, 10, 1);
insert into theatre_row(row_id, row_index, seats, hall_id) values (2, 2, 15, 1);
insert into theatre_row(row_id, row_index, seats, hall_id) values (3, 3, 25, 1);

insert into theatre_row(row_id, row_index, seats, hall_id) values (4, 1, 15, 2);
insert into theatre_row(row_id, row_index, seats, hall_id) values (5, 2, 15, 2);
insert into theatre_row(row_id, row_index, seats, hall_id) values (6, 3, 15, 2);

insert into theatre_row(row_id, row_index, seats, hall_id) values (7, 1, 10, 3);
insert into theatre_row(row_id, row_index, seats, hall_id) values (8, 2, 15, 3);
insert into theatre_row(row_id, row_index, seats, hall_id) values (9, 3, 25, 3);

insert into theatre_row(row_id, row_index, seats, hall_id) values (10, 1, 15, 4);
insert into theatre_row(row_id, row_index, seats, hall_id) values (11, 2, 15, 4);
insert into theatre_row(row_id, row_index, seats, hall_id) values (12, 3, 15, 4);

insert into theatre_row(row_id, row_index, seats, hall_id) values (13, 1, 10, 5);
insert into theatre_row(row_id, row_index, seats, hall_id) values (14, 2, 15, 5);
insert into theatre_row(row_id, row_index, seats, hall_id) values (15, 3, 25, 5);

insert into theatre_row(row_id, row_index, seats, hall_id) values (16, 1, 10, 6);
insert into theatre_row(row_id, row_index, seats, hall_id) values (17, 2, 15, 6);
insert into theatre_row(row_id, row_index, seats, hall_id) values (18, 3, 25, 6);

insert into theatre_row(row_id, row_index, seats, hall_id) values (19, 1, 10, 7);
insert into theatre_row(row_id, row_index, seats, hall_id) values (20, 2, 15, 7);
insert into theatre_row(row_id, row_index, seats, hall_id) values (21, 3, 25, 7);

insert into theatre_row(row_id, row_index, seats, hall_id) values (22, 1, 10, 8);
insert into theatre_row(row_id, row_index, seats, hall_id) values (23, 2, 15, 8);
insert into theatre_row(row_id, row_index, seats, hall_id) values (24, 3, 25, 8);

insert into theatre_row(row_id, row_index, seats, hall_id) values (25, 1, 10, 9);
insert into theatre_row(row_id, row_index, seats, hall_id) values (26, 2, 15, 9);
insert into theatre_row(row_id, row_index, seats, hall_id) values (27, 3, 25, 9);

insert into theatre_row(row_id, row_index, seats, hall_id) values (28, 1, 10, 10);
insert into theatre_row(row_id, row_index, seats, hall_id) values (29, 2, 15, 10);
insert into theatre_row(row_id, row_index, seats, hall_id) values (30, 3, 25, 10);

insert into theatre_row(row_id, row_index, seats, hall_id) values (31, 1, 10, 11);
insert into theatre_row(row_id, row_index, seats, hall_id) values (32, 2, 15, 11);
insert into theatre_row(row_id, row_index, seats, hall_id) values (33, 3, 25, 11);

-------------------------------------------------------------------------------------

insert into film_session(film_session_id, time, film_id, hall_id) values (1, '2020-04-24 09:00:00', 1, 1);
insert into film_session(film_session_id, time, film_id, hall_id) values (2, '2020-04-24 12:00:00', 2, 1);
insert into film_session(film_session_id, time, film_id, hall_id) values (3, '2020-04-24 15:00:00', 3, 1);
insert into film_session(film_session_id, time, film_id, hall_id) values (4, '2020-04-24 18:00:00', 4, 1);
insert into film_session(film_session_id, time, film_id, hall_id) values (5, '2020-04-24 21:00:00', 5, 1);

insert into film_session(film_session_id, time, film_id, hall_id) values (6, '2020-04-24 09:00:00', 6, 2);
insert into film_session(film_session_id, time, film_id, hall_id) values (7, '2020-04-24 12:00:00', 7, 2);
insert into film_session(film_session_id, time, film_id, hall_id) values (8, '2020-04-24 15:00:00', 8, 2);
insert into film_session(film_session_id, time, film_id, hall_id) values (9, '2020-04-24 18:00:00', 9, 2);


insert into film_session(film_session_id, time, film_id, hall_id) values (10, '2020-04-24 09:00:00', 1, 3);
insert into film_session(film_session_id, time, film_id, hall_id) values (11, '2020-04-24 12:00:00', 2, 3);
insert into film_session(film_session_id, time, film_id, hall_id) values (12, '2020-04-24 15:00:00', 3, 3);
insert into film_session(film_session_id, time, film_id, hall_id) values (13, '2020-04-24 18:00:00', 4, 3);
insert into film_session(film_session_id, time, film_id, hall_id) values (14, '2020-04-24 21:00:00', 5, 3);

insert into film_session(film_session_id, time, film_id, hall_id) values (15, '2020-04-24 09:00:00', 6, 4);
insert into film_session(film_session_id, time, film_id, hall_id) values (16, '2020-04-24 12:00:00', 7, 4);
insert into film_session(film_session_id, time, film_id, hall_id) values (17, '2020-04-24 15:00:00', 8, 4);
insert into film_session(film_session_id, time, film_id, hall_id) values (18, '2020-04-24 18:00:00', 9, 4);


insert into film_session(film_session_id, time, film_id, hall_id) values (19, '2020-04-24 09:00:00', 1, 5);
insert into film_session(film_session_id, time, film_id, hall_id) values (20, '2020-04-24 12:00:00', 2, 5);
insert into film_session(film_session_id, time, film_id, hall_id) values (21, '2020-04-24 15:00:00', 3, 5);
insert into film_session(film_session_id, time, film_id, hall_id) values (22, '2020-04-24 18:00:00', 4, 5);
insert into film_session(film_session_id, time, film_id, hall_id) values (23, '2020-04-24 21:00:00', 5, 5);

insert into film_session(film_session_id, time, film_id, hall_id) values (24, '2020-04-24 09:00:00', 6, 6);
insert into film_session(film_session_id, time, film_id, hall_id) values (25, '2020-04-24 12:00:00', 7, 6);
insert into film_session(film_session_id, time, film_id, hall_id) values (26, '2020-04-24 15:00:00', 8, 6);
insert into film_session(film_session_id, time, film_id, hall_id) values (27, '2020-04-24 18:00:00', 9, 6);


insert into film_session(film_session_id, time, film_id, hall_id) values (28, '2020-04-24 09:00:00', 1, 7);
insert into film_session(film_session_id, time, film_id, hall_id) values (29, '2020-04-24 12:00:00', 2, 7);
insert into film_session(film_session_id, time, film_id, hall_id) values (30, '2020-04-24 15:00:00', 3, 7);
insert into film_session(film_session_id, time, film_id, hall_id) values (31, '2020-04-24 18:00:00', 4, 7);
insert into film_session(film_session_id, time, film_id, hall_id) values (32, '2020-04-24 21:00:00', 5, 7);

insert into film_session(film_session_id, time, film_id, hall_id) values (33, '2020-04-24 09:00:00', 6, 8);
insert into film_session(film_session_id, time, film_id, hall_id) values (34, '2020-04-24 12:00:00', 7, 8);
insert into film_session(film_session_id, time, film_id, hall_id) values (35, '2020-04-24 15:00:00', 8, 8);
insert into film_session(film_session_id, time, film_id, hall_id) values (36, '2020-04-24 18:00:00', 9, 8);


insert into film_session(film_session_id, time, film_id, hall_id) values (37, '2020-04-24 09:00:00', 1, 9);
insert into film_session(film_session_id, time, film_id, hall_id) values (38, '2020-04-24 12:00:00', 2, 9);
insert into film_session(film_session_id, time, film_id, hall_id) values (39, '2020-04-24 15:00:00', 3, 9);
insert into film_session(film_session_id, time, film_id, hall_id) values (40, '2020-04-24 18:00:00', 4, 9);
insert into film_session(film_session_id, time, film_id, hall_id) values (41, '2020-04-24 21:00:00', 5, 9);

insert into film_session(film_session_id, time, film_id, hall_id) values (42, '2020-04-24 09:00:00', 6, 10);
insert into film_session(film_session_id, time, film_id, hall_id) values (43, '2020-04-24 12:00:00', 7, 10);
insert into film_session(film_session_id, time, film_id, hall_id) values (44, '2020-04-24 15:00:00', 8, 10);
insert into film_session(film_session_id, time, film_id, hall_id) values (45, '2020-04-24 18:00:00', 9, 10);

insert into film_session(film_session_id, time, film_id, hall_id) values (46, '2020-04-24 09:00:00', 1, 11);
insert into film_session(film_session_id, time, film_id, hall_id) values (47, '2020-04-24 12:00:00', 3, 12);
insert into film_session(film_session_id, time, film_id, hall_id) values (48, '2020-04-24 15:00:00', 5, 11);
insert into film_session(film_session_id, time, film_id, hall_id) values (49, '2020-04-24 18:00:00', 7, 12);

------------------------------------------------------------------------------------------------------------------

insert into seat(seat_id, row_id, is_seat_booked, price) values (1, 1, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (2, 1, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (3, 1, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (4, 1, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (5, 1, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (6, 1, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (7, 1, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (8, 1, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (9, 1, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (10, 1, 0, 5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (11, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (12, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (13, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (14, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (15, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (16, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (17, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (18, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (19, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (20, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (21, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (22, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (23, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (24, 2, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (25, 2, 0, 7.5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (26, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (27, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (28, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (29, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (30, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (31, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (32, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (33, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (34, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (35, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (36, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (37, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (38, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (39, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (40, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (41, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (42, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (43, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (44, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (45, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (46, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (47, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (48, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (49, 3, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (50, 3, 0, 10);



insert into seat(seat_id, row_id, is_seat_booked, price) values (51, 4, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (52, 4, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (53, 4, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (54, 4, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (55, 4, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (56, 4, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (57, 4, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (58, 4, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (59, 4, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (60, 4, 0, 5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (61, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (62, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (63, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (64, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (65, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (66, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (67, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (68, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (69, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (70, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (71, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (72, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (73, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (74, 5, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (75, 5, 0, 7.5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (76, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (77, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (78, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (79, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (80, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (81, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (82, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (83, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (84, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (85, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (86, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (87, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (88, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (89, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (90, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (91, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (92, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (93, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (94, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (95, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (96, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (97, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (98, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (99, 6, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (100, 6, 0, 10);

------------------------------------------------------------------------------------

insert into seat(seat_id, row_id, is_seat_booked, price) values (101, 7, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (102, 7, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (103, 7, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (104, 7, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (105, 7, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (106, 7, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (107, 7, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (108, 7, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (109, 7, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (110, 7, 0, 5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (111, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (112, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (113, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (114, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (115, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (116, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (117, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (118, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (119, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (120, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (121, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (122, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (123, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (124, 8, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (125, 8, 0, 7.5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (126, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (127, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (128, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (129, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (130, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (131, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (132, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (133, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (134, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (135, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (136, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (137, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (138, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (139, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (140, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (141, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (142, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (143, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (144, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (145, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (146, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (147, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (148, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (149, 9, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (150, 9, 0, 10);

-----------------------------------------------------------------------------------

insert into seat(seat_id, row_id, is_seat_booked, price) values (151, 10, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (152, 10, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (153, 10, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (154, 10, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (155, 10, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (156, 10, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (157, 10, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (158, 10, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (159, 10, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (160, 10, 0, 5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (161, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (162, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (163, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (164, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (165, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (166, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (167, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (168, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (169, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (170, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (171, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (172, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (173, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (174, 11, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (175, 11, 0, 7.5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (176, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (177, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (178, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (179, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (180, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (181, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (182, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (183, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (184, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (185, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (186, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (187, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (188, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (189, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (190, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (191, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (192, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (193, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (194, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (195, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (196, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (197, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (198, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (199, 12, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (200, 12, 0, 10);

-----------------------------------------------------------------------------------

insert into seat(seat_id, row_id, is_seat_booked, price) values (201, 13, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (202, 13, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (203, 13, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (204, 13, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (205, 13, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (206, 13, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (207, 13, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (208, 13, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (209, 13, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (210, 13, 0, 5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (211, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (212, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (213, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (214, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (215, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (216, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (217, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (218, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (219, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (220, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (221, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (222, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (223, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (224, 14, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (225, 14, 0, 7.5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (226, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (227, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (228, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (229, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (230, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (231, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (232, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (233, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (234, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (235, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (236, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (237, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (238, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (239, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (240, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (241, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (242, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (243, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (244, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (245, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (246, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (247, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (248, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (249, 15, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (250, 15, 0, 10);

-----------------------------------------------------------------------------------

insert into seat(seat_id, row_id, is_seat_booked, price) values (251, 16, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (252, 16, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (253, 16, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (254, 16, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (255, 16, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (256, 16, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (257, 16, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (258, 16, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (259, 16, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (260, 16, 0, 5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (261, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (262, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (263, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (264, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (265, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (266, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (267, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (268, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (269, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (270, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (271, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (272, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (273, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (274, 17, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (275, 17, 0, 7.5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (276, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (277, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (278, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (279, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (280, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (281, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (282, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (283, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (284, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (285, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (286, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (287, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (288, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (289, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (290, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (291, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (292, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (293, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (294, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (295, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (296, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (297, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (298, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (299, 18, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (300, 18, 0, 10);

-----------------------------------------------------------------------------------

insert into seat(seat_id, row_id, is_seat_booked, price) values (301, 19, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (302, 19, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (303, 19, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (304, 19, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (305, 19, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (306, 19, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (307, 19, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (308, 19, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (309, 19, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (310, 19, 0, 5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (311, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (312, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (313, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (314, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (315, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (316, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (317, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (318, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (319, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (320, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (321, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (322, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (323, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (324, 20, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (325, 20, 0, 7.5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (326, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (327, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (328, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (329, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (330, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (331, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (332, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (333, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (334, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (335, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (336, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (337, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (338, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (339, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (340, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (341, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (342, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (343, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (344, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (345, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (346, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (347, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (348, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (349, 21, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (350, 21, 0, 10);

-----------------------------------------------------------------------------------

insert into seat(seat_id, row_id, is_seat_booked, price) values (351, 22, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (352, 22, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (353, 22, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (354, 22, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (355, 22, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (356, 22, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (357, 22, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (358, 22, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (359, 22, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (360, 22, 0, 5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (361, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (362, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (363, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (364, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (365, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (366, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (367, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (368, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (369, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (370, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (371, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (372, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (373, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (374, 23, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (375, 23, 0, 7.5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (376, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (377, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (378, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (379, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (380, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (381, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (382, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (383, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (384, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (385, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (386, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (387, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (388, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (389, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (390, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (391, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (392, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (393, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (394, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (395, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (396, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (397, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (398, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (399, 24, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (400, 24, 0, 10);

-----------------------------------------------------------------------------------

insert into seat(seat_id, row_id, is_seat_booked, price) values (451, 25, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (452, 25, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (453, 25, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (454, 25, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (455, 25, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (456, 25, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (457, 25, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (458, 25, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (459, 25, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (460, 25, 0, 5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (461, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (462, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (463, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (464, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (465, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (466, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (467, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (468, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (469, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (470, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (471, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (472, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (473, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (474, 26, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (475, 26, 0, 7.5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (476, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (477, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (478, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (479, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (480, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (481, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (482, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (483, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (484, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (485, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (486, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (487, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (488, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (489, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (490, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (491, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (492, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (493, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (494, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (495, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (496, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (497, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (498, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (499, 27, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (500, 27, 0, 10);

-----------------------------------------------------------------------------------

insert into seat(seat_id, row_id, is_seat_booked, price) values (501, 28, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (502, 28, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (503, 28, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (504, 28, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (505, 28, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (506, 28, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (507, 28, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (508, 28, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (509, 28, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (510, 28, 0, 5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (511, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (512, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (513, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (514, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (515, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (516, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (517, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (518, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (519, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (520, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (521, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (522, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (523, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (524, 29, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (525, 29, 0, 7.5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (526, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (527, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (528, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (529, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (530, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (531, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (532, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (533, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (534, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (535, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (536, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (537, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (538, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (539, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (540, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (541, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (542, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (543, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (544, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (545, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (546, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (547, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (548, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (549, 30, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (550, 30, 0, 10);

insert into seat(seat_id, row_id, is_seat_booked, price) values (401, 31, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (402, 31, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (403, 31, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (404, 31, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (405, 31, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (406, 31, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (407, 31, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (408, 31, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (409, 31, 0, 5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (410, 31, 0, 5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (411, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (412, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (413, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (414, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (415, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (416, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (417, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (418, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (419, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (420, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (421, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (422, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (423, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (424, 32, 0, 7.5);
insert into seat(seat_id, row_id, is_seat_booked, price) values (425, 32, 0, 7.5);

insert into seat(seat_id, row_id, is_seat_booked, price) values (426, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (427, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (428, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (429, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (430, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (431, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (432, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (433, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (434, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (435, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (436, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (437, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (438, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (439, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (440, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (441, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (442, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (443, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (444, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (445, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (446, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (447, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (448, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (449, 33, 0, 10);
insert into seat(seat_id, row_id, is_seat_booked, price) values (450, 33, 0, 10);

