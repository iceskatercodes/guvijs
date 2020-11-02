-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`attendance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`attendance` (
  `attendance_id` INT NOT NULL,
  `attendance` INT NULL,
  PRIMARY KEY (`attendance_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`company_drives`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`company_drives` (
  `comapy_name` VARCHAR(45) NULL,
  `company_id` INT NOT NULL,
  PRIMARY KEY (`company_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`codekata`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`codekata` (
  `number` INT NULL,
  `math` INT NULL,
  `string` INT NULL,
  `codekata_id` INT NOT NULL,
  PRIMARY KEY (`codekata_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`student_activated_courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`student_activated_courses` (
  `course_id` INT NOT NULL,
  `course_name` VARCHAR(45) NULL,
  PRIMARY KEY (`course_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`courses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`courses` (
  `course_id` INT NOT NULL,
  `course_name` VARCHAR(45) NULL,
  PRIMARY KEY (`course_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`mentor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`mentor` (
  `mentor_id` INT NOT NULL,
  `mentor_name` VARCHAR(45) NULL,
  PRIMARY KEY (`mentor_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`topics`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`topics` (
  `topic_1` VARCHAR(45) NULL,
  `topic_2` VARCHAR(45) NULL,
  `topis_id` INT NOT NULL,
  PRIMARY KEY (`topis_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`task` (
  `task_id` INT NOT NULL,
  `task_1` VARCHAR(45) NULL,
  `task_2` VARCHAR(45) NULL,
  PRIMARY KEY (`task_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `user_id` INT NULL,
  `user_name` VARCHAR(45) NULL,
  `attendance_attendance_id` INT NOT NULL,
  `company_drives_company_id` INT NOT NULL,
  `codekata_codekata_id` INT NOT NULL,
  `student_activated_courses_course_id` INT NOT NULL,
  `courses_course_id` INT NOT NULL,
  `mentor_mentor_id` INT NOT NULL,
  `topics_topis_id` INT NOT NULL,
  `task_task_id` INT NOT NULL,
  INDEX `fk_user_attendance1_idx` (`attendance_attendance_id` ASC) VISIBLE,
  INDEX `fk_user_company_drives1_idx` (`company_drives_company_id` ASC) VISIBLE,
  INDEX `fk_user_codekata1_idx` (`codekata_codekata_id` ASC) VISIBLE,
  INDEX `fk_user_student_activated_courses1_idx` (`student_activated_courses_course_id` ASC) VISIBLE,
  INDEX `fk_user_courses1_idx` (`courses_course_id` ASC) VISIBLE,
  INDEX `fk_user_mentor1_idx` (`mentor_mentor_id` ASC) VISIBLE,
  INDEX `fk_user_topics1_idx` (`topics_topis_id` ASC) VISIBLE,
  PRIMARY KEY (`attendance_attendance_id`, `company_drives_company_id`, `codekata_codekata_id`, `student_activated_courses_course_id`, `courses_course_id`, `mentor_mentor_id`, `topics_topis_id`, `task_task_id`),
  INDEX `fk_user_task1_idx` (`task_task_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_attendance1`
    FOREIGN KEY (`attendance_attendance_id`)
    REFERENCES `mydb`.`attendance` (`attendance_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_company_drives1`
    FOREIGN KEY (`company_drives_company_id`)
    REFERENCES `mydb`.`company_drives` (`company_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_codekata1`
    FOREIGN KEY (`codekata_codekata_id`)
    REFERENCES `mydb`.`codekata` (`codekata_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_student_activated_courses1`
    FOREIGN KEY (`student_activated_courses_course_id`)
    REFERENCES `mydb`.`student_activated_courses` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_courses1`
    FOREIGN KEY (`courses_course_id`)
    REFERENCES `mydb`.`courses` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_mentor1`
    FOREIGN KEY (`mentor_mentor_id`)
    REFERENCES `mydb`.`mentor` (`mentor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_topics1`
    FOREIGN KEY (`topics_topis_id`)
    REFERENCES `mydb`.`topics` (`topis_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_task1`
    FOREIGN KEY (`task_task_id`)
    REFERENCES `mydb`.`task` (`task_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO attendance VALUES (1,'100');
INSERT INTO attendance VALUES (2,'90');
INSERT INTO attendance VALUES (3,'80');
INSERT INTO attendance VALUES (4,'70');
INSERT INTO attendance VALUES (5,'60');

INSERT INTO codekata VALUES (10,20,30,1);
INSERT INTO codekata VALUES (10,10,30,2);
INSERT INTO codekata VALUES (20,20,30,3);
INSERT INTO codekata VALUES (10,20,10,4);
INSERT INTO codekata VALUES (10,10,10,5);

INSERT INTO company_drives VALUES ('google',1);
INSERT INTO company_drives VALUES ('Amazon',2);
INSERT INTO company_drives VALUES ('Flipkart',3);
INSERT INTO company_drives VALUES ('Netflix',4);
INSERT INTO company_drives VALUES ('PGW',5);

INSERT INTO courses VALUES(1,'Java Script');
INSERT INTO courses VALUES(2,'Phython');
INSERT INTO courses VALUES(3,'Jango');
INSERT INTO courses VALUES(4,'Node JS');
INSERT INTO courses VALUES(5,'Java');

INSERT INTO mentor VALUES(1,'Banu');
INSERT INTO mentor VALUES(2,'Arun');
INSERT INTO mentor VALUES(3,'Prakash');
INSERT INTO mentor VALUES(4,'Venkat');
INSERT INTO mentor VALUES(5,'Pougal');

INSERT INTO student_activated_courses VALUES(1,'Java');
INSERT INTO student_activated_courses VALUES(2,'Java Script');
INSERT INTO student_activated_courses VALUES(3,'Phython');
INSERT INTO student_activated_courses VALUES(4,'Node JS');
INSERT INTO student_activated_courses VALUES(5,'Jango');

INSERT INTO task VALUES (1,'calc','opps');
INSERT INTO task VALUES (2,'opps','calc');
INSERT INTO task VALUES (3,'dps','opps');
INSERT INTO task VALUES (4,'calc','dps');
INSERT INTO task VALUES (5,'dps','dfs');

INSERT INTO topics VALUES ('sql','js',1);
INSERT INTO topics VALUES ('js','sql',2);
INSERT INTO topics VALUES ('sql','njs',3);
INSERT INTO topics VALUES ('njs','js',4);
INSERT INTO topics VALUES ('njs','dps',5);

INSERT INTO user VALUES (1,'ram',1,1,1,1,1,1,1,1);
INSERT INTO user VALUES (2,'tom',2,2,2,2,2,1,2,2);
INSERT INTO user VALUES (3,'som',3,3,3,3,3,1,3,3);
INSERT INTO user VALUES (4,'sam',4,4,4,4,4,2,4,4);
INSERT INTO user VALUES (5,'gim',5,5,5,5,5,3,5,5);

-- get number problem solved in codekata by combining the users
SELECT 
    codekata.number, users.user_name
FROM
    users
        INNER JOIN
    codekata ON users.codekata_codekata_id = codekata.codekata_id;
-- display the no of company drives attended by a user
SELECT 
    users.user_name, company_drives.comapy_name
FROM
    users
        INNER JOIN
    company_drives ON users.company_drives_company_id = company_drives.company_id;

-- combine and display students_activated_courses and courses for a specific user grouping them baswd on the course
SELECT 
    users.user_name,
    student_activated_courses.course_name,
    courses.course_name
FROM
    users
        INNER JOIN
    student_activated_courses ON student_activated_courses.course_id = users.student_activated_courses_course_id
        INNER JOIN
    courses ON users.courses_course_id = courses.course_id;
   -- list all the mentors 
   select mentor.mentor_name from mentor;
  
 --  list the number of students that are assigned for a mentor
  select user_name from users where users.mentor_mentor_id =1;