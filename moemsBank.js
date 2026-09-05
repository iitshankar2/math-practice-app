// MOEMS Elementary question bank
// 568 questions; answers are numeric only (units/words stripped)

const moemsBank = [
  {
    question: "A digital clock shows 2:35. This is the first time after midnight when all three digits are different prime numbers. What is the last time before noon when all three digits on the clock are different prime numbers?",
    answer: 753
  },
  {
    question: "The only way that 10 can be written as the sum of 4 different counting numbers is 1 + 2 + 3 + 4. In how many different ways can 15 be written as the sum of 4 different counting numbers?",
    answer: 6
  },
  {
    question: "The tower shown is made of congruent cubes stacked on top of each other. Some of the cubes are not visible. How many cubes in all are used to form the tower?",
    answer: 20
  },
  {
    question: "Hannah gives clues about her six-digit secret number: Clue 1: It is the same number if you read it from right to left. Clue 2: The number is a multiple of 9. Clue 3: Cross off the first and last digits. The only prime factor of the remaining four-digit number is 11. What is Hannah's six-digit number?",
    answer: 513315
  },
  {
    question: "The L-shape pictured is formed from three squares, each 1 cm on a side. Five of these L-shapes are placed next to each other to form a figure. What is the least possible perimeter of the figure they form, in cm?",
    answer: 16
  },
  {
    question: "Add: 531 + 642 + 753 + 864 + 975.",
    answer: 3765
  },
  {
    question: "The first 40 odd counting numbers are written. How many times does '3' appear as a digit?",
    answer: 13
  },
  {
    question: "Ashley has a rectangle made out of paper that is 8 cm by 12 cm. She folds it in half twice, first vertically and then horizontally. The new rectangle looks just like the original rectangle but smaller. What is the area of the new smaller rectangle in square cm?",
    answer: 24
  },
  {
    question: "In the figure, the whole numbers from 1 through 7 are to be placed, one per square. The sum of the numbers in the left column, the sum of the numbers in the right column, and the sum of the numbers in each diagonal are the same. What is the least possible product of the numbers across the gray row?",
    answer: 6
  },
  {
    question: "In the following cryptarithm, each different letter represents a different digit in the 6-digit numbers. If B != 0, what is the least sum possible? BETTER BITTER BATTER + BUTTER",
    answer: 512024
  },
  {
    question: "The structure below is made of unit cubes piled on top of each other. Some cubes are not visible. What is the number of cubes in the structure?",
    answer: 38
  },
  {
    question: "The complete outside (including the bottom) of a wooden 4 inch cube was painted purple. The painted cube was then cut into 1 inch cubes. How many of the 1 inch cubes do not have purple paint on any face?",
    answer: 8
  },
  {
    question: "Each of the three diagrams below shows a balance of weights using different objects. Diagram 1: 1 circle = 1 triangle + 2 squares. Diagram 2: 1 circle + 1 square = 1 triangle + 1 trapezoid. Diagram 3: 1 triangle = 1 trapezoid + 1 square. How many squares will balance a circle?",
    answer: 6
  },
  {
    question: "A group of 21 people went to the county fair with 9 people on a stagecoach and 3 people in each buggy. On the return trip, 4 people rode in each buggy. How many people returned on the stagecoach?",
    answer: 5
  },
  {
    question: "The perimeter of a rectangle is 22 inches and the inch-measure of each side is a counting number. How many different areas in square inches could the rectangle have?",
    answer: 5
  },
  {
    question: "The product of two numbers is 504 and each of the two numbers is divisible by 6. However, neither of the two numbers is 6. What is the larger of the two numbers?",
    answer: 42
  },
  {
    question: "When Frankenstein, Dracula, and a mummy compared the amount of candy they got on halloween, they discovered that Frankenstein and Dracula together had 12 pieces, Dracula and the mummy together had 18 and Frankenstein and the mummy together had 10. Who has the least amount of candy, and how much is it.",
    answer: 2
  },
  {
    question: "ABCD is a square with diagonal AC 8 units long. How many square units are in the area of the square?",
    answer: 32
  },
  {
    question: "If you start with 4 and count by 3s, you get a sequence 4, 7, 10, ... , N. If N is the 15th number, what number does N represent.",
    answer: 46
  },
  {
    question: "The fraction below is an extended fraction. What is the simplest form of this fraction? 1 / (1 + 1 / (2 + 1/3))",
    answer: "7/10"
  },
  {
    question: "Square ABCD has all four of its vertices on a circle with diameter 10 units in length. Segments AC and BD are diagonals. How many square units of area does square ABCD have?",
    answer: 50
  },
  {
    question: "In the figure below, all corners are right angles and each number represents the unit length of the segment which is nearest to it. How many square units of area does the figure have?",
    answer: 62
  },
  {
    question: "A jar filled with water weighs 10 pounds. When one half of the water is poured out, the jar and the remaining water weigh 5 3/4 lbs. How much does the jar weigh?",
    answer: 1.5
  },
  {
    question: "Consecutive numbers are whole numbers that follow in order such as 7, 8, 9, 10, 11, 12. Find three consecutive numbers such that the sum of the first and third is 118.",
    answer: "58, 59, 60"
  },
  {
    question: "The average of 6 numbers is 7. If two of the six numbers are removed, the average of the remaining numbers is 8. What is the sum of the two numbers which were removed?",
    answer: 10
  },
  {
    question: "A4273B is a six-digit number in which A and B are digits, and the number is divisible by 72 with no remainder. Find the value of A and B.",
    answer: "5, 6"
  },
  {
    question: "In a small country, \"OC\" means 8 sticks. \"OCTA\" means a bundle of 8 OCs, \"OCTIL\" means a bundle of 8 OCTAs and \"OCTILLA\" means a bundle of 8 OCTILs. How many sticks are in an OCTILLA?",
    answer: 4096
  },
  {
    question: "In the addition problem below, different letters stand for different digits. What five-digit number does SERVE represent? Vertical addition: VCR + VCCT = SERVE.",
    answer: 10390
  },
  {
    question: "What should the starting number be in the diagram? Start with an unknown number, multiply by 4, add 8, divide by 3, result 28.",
    answer: 19
  },
  {
    question: "When certain numbers are placed in the empty boxes, the sum of the three numbers in each of the three rows, three columns, and two diagonals are the same. What number should be in the center box?",
    answer: 11
  },
  {
    question: "The cube below is constructed of congruent boards, each being the same size and shape. How many boards does the cube contain?",
    answer: 18
  },
  {
    question: "Peter had a 12:00 noon appointment that was 60 miles from his home. He drove from his home at an average rate of 40 miles per hour and arrived 15 minutes late. At what time did Peter leave home for the appointment?",
    answer: 1045
  },
  {
    question: "An acute angle is an angle whose measure is between 0 and 90 degrees. Using the rays in the diagram, how many different acute angles can be found?",
    answer: 6
  },
  {
    question: "The length of the shortest trip from A to B along the edges of the cube is the length of three edges. How many different 3-edge trips are there from A to B?",
    answer: 6
  },
  {
    question: "I have exactly ten coins whose total value is $1. If three of the coins are quarters, what are the remaining coins?",
    answer: "2, 5"
  },
  {
    question: "In the figure below, there are two large congruent squares with sides 7 units long and four small congruent squares with sides of 3 units long. If the shaded figure is also a square, what is its area in square units?",
    answer: 25
  },
  {
    question: "Consecutive numbers are numbers that follow in order. For example: 7, 8, 9, 10, ... Suppose the average of 15 consecutive numbers is 15. What is the average of the first five numbers?",
    answer: 10
  },
  {
    question: "The owner of a bicycle store had a sale on bicycles (two wheelers) and tricycles (three wheelers). Each cycle has two pedals. When he counted the total number of pedals of the cycles, he got 50. When he counted the total number of wheels of the cycles, he got 64. How many tricycles were offered in the sale.",
    answer: 14
  },
  {
    question: "Person A was born on January 15, 1948. Person B was born on January 15, 1962. If both are alive now, in what year was person A twice as old as person B?",
    answer: 1976
  },
  {
    question: "The small boxes in figures A and B are congruent squares. The perimeter of figure A is 48 inches. What is the perimeter of Figure B?",
    answer: 60
  },
  {
    question: "A train traveling at 30 miles per hour reaches a tunnel which is 9 times as long as the train. If the train takes 2 minutes to completely clear the tunnel, how long is the train?",
    answer: 0.1
  },
  {
    question: "The square below is dividied into four congruent rectangles. The perimeter of each of the four congruent rectangles is 25 units. How many units are there in the perimeter of the square?",
    answer: 40
  },
  {
    question: "The sum of the weights of Tom and Bill is 138 pounds and one boy is 34 pounds heavier than the other. How much does the heavier boy weigh?",
    answer: 86
  },
  {
    question: "1^2 means 1x1, 2^2 means 2x2, 3^2 means 3x3, and so forth. 1^2+2^2+3^2+4^2+...+25^2 = 5525 and 2^2+4^2+6^2+8^2+...+50^2 = N. Find the value of N.",
    answer: 22100
  },
  {
    question: "A rectangular tile is 2 inches by 3 inches. What is the least number of tiles are needed to completely cover a square region with side length of 2 feet?",
    answer: 96
  },
  {
    question: "ABCD and AFED are squares with a common side AD of length 10. Arc BD and arc DF are quarter-circles. How many square cm are in the area of the shaded region?",
    answer: 100
  },
  {
    question: "A square piece of paper is folded in half as shown and then cut into two rectangles along the fold. The perimeter of the two rectangles is 18 inches. What is the perimeter of the original square?",
    answer: 24
  },
  {
    question: "How many even numbers between 1 and 101 are multiples of 3?",
    answer: 16
  },
  {
    question: "In hoopball, a field goal is worth 2 points and a foul shot is worth 1 point. Suppose a team scored 72 points and made 6 more field goals than foul shots. How many foul shots did the team make?",
    answer: 20
  },
  {
    question: "How many different rectangles can you trace?",
    answer: 18
  },
  {
    question: "ABCD is a square; E, F, G, and H are midpoints of AP, BP, CP, and DP respectively. What fractional part of the area of square ABCD is the area of square EFGH?",
    answer: "1/4"
  },
  {
    question: "The length of AE is 20 cm. B is the midpoint of AC, C is the midpoint of BD and D is the midpoint of BE. What is the length of DE in cm?",
    answer: 8
  },
  {
    question: "A rectangular garden is 14 ft. by 21 ft. and is bordered by a concrete walk 3 ft wide as shown. How many square feet are in the surface area of just the concrete walk?",
    answer: 246
  },
  {
    question: "A number is greater than 10 with the property that, when divided either by 5 or 7, the remainder is 1. What is the smallest odd counting number that has that property?",
    answer: 71
  },
  {
    question: "The product of two whole numbers is 10,000. If neither number contains a zero digit, what are the two numbers?",
    answer: "16, 625"
  },
  {
    question: "Six people participated in a checker tournament. Each participant played exactly three games with each of the other participants. How many games were played in all?",
    answer: 45
  },
  {
    question: "In a group of 30 high school students, 8 take French, 12 take Spanish and 3 take both languages. How many students of the group take neither French nor Spanish?",
    answer: 13
  },
  {
    question: "ABCD is a square with area 16 sq meters. E and F are midpoints of sides AB and BC, respectively. What is the area of the trapezoid AEFC (the shaded region)?",
    answer: 6
  },
  {
    question: "The age of a man is the same as his wife age with the digits reversed. The sum of their ages is 99 and the man is 9 years older than his wife. How old is the man?",
    answer: 54
  },
  {
    question: "Three squares each have sides of length 6 units and overlap each other as shown at the right. The points where the sides cross are midpoints. Find the area of the shaded figure in square units.",
    answer: 90
  },
  {
    question: "How many times does x appear in the diagram below?",
    answer: 120
  },
  {
    question: "Of three numbers, 1/2 and 1/3. What should the third number be so that the average of all three is 1?",
    answer: "13/6"
  },
  {
    question: "A palimage of a counting number has the same digits as the given number but in reverse order. For example, (659 and 956) and (1327 and 7231) are palimages. Now add 354 and its palimage. Call this sum X. Add X and its palimage. Call this sum Y. Add Y and its palimage. Call this sum Z. What is the value of Z?",
    answer: 6666
  },
  {
    question: "The set of stairs shown at the right is constructed by placing layers of cubes on top of each other. What is the total number of cubes contained in the staircase?",
    answer: 40
  },
  {
    question: "Four numbers are arranged in order of size and the difference between any two adjacent numbers is the same. Suppose 1/3 is the first and 1/2 is the fourth. What are the two numbers between 1/3 and 1/2?",
    answer: "7/18, 4/9"
  },
  {
    question: "13 plums weigh as much as two apples and one pear. Four plums and one apple have the same weight as one pear. How many plums have the weight of one pear?",
    answer: 7
  },
  {
    question: "A restaurant has 30 tables which are of two types. The first type seats two people and the second seats five people. A total of 81 people are seated when all seats are occupied. How many tables for two are there?",
    answer: 23
  },
  {
    question: "In the multiplication problem below, each blank space represents a missing digit. Find the product. Vertical: 4 _ _ times _ 7; first partial product _ _ 8 2; second partial product 1 2 _ _ (shifted); five-digit final product.",
    answer: 15762
  },
  {
    question: "A box contains over 100 marbles. The marbles can be divided into equal shares among 6, 7, or 8 children with 1 marble left each time. What is the least number of marbles that the box can contain?",
    answer: 169
  },
  {
    question: "When 24 is added to a number, the result is the same as when the number is multiplied by 3. What is the number?",
    answer: 12
  },
  {
    question: "The angles of a triangle are in a ratio of 4 : 3 : 2. What is the degree measure of the second largest angle?",
    answer: 60
  },
  {
    question: "The tribonacci sequence starts with terms T(0)=T(1)=0 and T(2)=1 and follows a pattern where each term is found by adding the three that came before it. For example: T(3)=0+0+1=1. What is T(8)?",
    answer: 24
  },
  {
    question: "In the diagram below, point E is drawn inside square ABCD such that triangle ABE is equilateral and EC is drawn. What is the measure of angle BEC?",
    answer: 75
  },
  {
    question: "Ten years ago, Jimmy was three times as old as Tom. In five years, Jimmy will be 10 years more than twice as old as Tom. How old is Tom right now?",
    answer: 35
  },
  {
    question: "If the first 20 odd counting numbers are written, how many times does 3 appear as a digit?",
    answer: 9
  },
  {
    question: "The kite shown below is a rhombus. The diagonals measure 16 and 12 inches. How many inches of ribbon would be needed to line the perimeter of the kite?",
    answer: 40
  },
  {
    question: "What is the value of the following, in simplest terms? (20 x 24 x 28 x 32) / (10 x 12 x 14 x 16)",
    answer: 16
  },
  {
    question: "Square ABCD is composed of nine congruent squares as shown. The area of the white region is 14 sq cm. What is the area of square ABCD in sq cm?",
    answer: 18
  },
  {
    question: "Square ACEG is drawn below. Points B, D, F, and H are midpoints of the sides of the square. How many squares are in this diagram?",
    answer: 6
  },
  {
    question: "On a standard 12-hour clock, the numerals 12 and 6 are opposite each other. On the planet Bajor, they used a circular ten-hour clock with the numerals 1 to 10 equally spaced. What pair of opposite numerals on a Bajorian clock has a sum of 11?",
    answer: "3, 8"
  },
  {
    question: "In a class of 26 students, 15 like vanilla ice cream and 16 like chocolate ice cream. However, 3 students do not like either. How many students like vanilla and chocolate ice cream?",
    answer: 8
  },
  {
    question: "Linda wants to buy 20 crayons. Toyworld sells crayons at 4 for 25 cents, and Gameland sells crayons at 5 for 30 cents. Which of the two stores sells 20 crayons for less, and by how much more?",
    answer: 5
  },
  {
    question: "In the number 203,500, the last two zeroes are called terminal zeros. If 30 x 40 x 50 x 60 x 70 is done, how many terminal zeros would the product have?",
    answer: 6
  },
  {
    question: "Marty has 6 more pogs than Jen has. After he gives 10 pogs to Jen, how many more pogs will Jen have than Marty?",
    answer: 14
  },
  {
    question: "A rectangular box is 2 cm high, 4 cm wide, and 6 cm deep. Michelle packs the box with cubes, each 2 cm by 2 cm by 2 cm, with no space left over. How many cubes does she fit in the box?",
    answer: 6
  },
  {
    question: "Below, boxes represent digits and different letters represent different non-zero digits. What three digit number is the least possible product? Vertical multiplication: AB x CB, first partial product ends in 9, second partial product is two digits, final product is three digits.",
    answer: 299
  },
  {
    question: "Admission to the local movie theater is $3 for each child and $7 for each adult. A group of 12 people pay $64 admission. How many children are in this group?",
    answer: 5
  },
  {
    question: "Suppose a standard twelve-hour clock now shows a time of 10:45. What will the clock show 100 hours from now?",
    answer: 245
  },
  {
    question: "Robert throws 5 darts at the target shown. Each dart lands in a region of the target, scoring the points shown. Of the following total scores, list all that are not possible. 6, 14, 17, 38, 42, 58",
    answer: "6, 17, 58"
  },
  {
    question: "ABCD is a rectangle whose area is 12 square units. How many square units are contained in the area of trapezoid EFBA?",
    answer: 9
  },
  {
    question: "What is the value of the whole number n if n = 1/2 of 2/3 of 3/4 of 4/5 of 100?",
    answer: 20
  },
  {
    question: "Kim was elected class president. She received 3 votes for every 2 votes that Amy got. No one else ran. However if 8 people who voted for Kim had voted for Amy instead, Kim would have received only one vote for every two that Amy would have got. How many people voted?",
    answer: 30
  },
  {
    question: "The area of a square is 36 centimeters. A rectangle has the same perimeter as the square. The length of the rectangle is twice its width. What is the area of the rectangle in square cm?",
    answer: 32
  },
  {
    question: "On his birthday, Newton was 14 years old and his father was 41. Newton noticed that his age was his father age with the digits reversed. How many years later will their ages next have their digits reversed?",
    answer: 11
  },
  {
    question: "A standard clock is set correctly at 1:00 PM. If it loses 3 minutes every hour, what will the clock show when the correct time is 10:00 AM the next day?",
    answer: 857
  },
  {
    question: "Fred read nine consecutive pages from a a certain book. The sum of the page numbers he read is 378. What is the page number of the middle page he read?",
    answer: 42
  },
  {
    question: "The 14 digits of a credit card number are written in the boxes below. If the sum of any three consecutive digits is 20, what digit is in Box A?",
    answer: 9
  },
  {
    question: "The pages of a book are numbered consecutively from 1 through 177, inclusive. If a page is chosen at random, what is the probability that the page number will contain the digit 1?",
    answer: "97/177"
  },
  {
    question: "Bryan can buy candy canes at 4 for $0.50 and can sell them at 3 for $0.50. How many candy canes must Bryan sell in order to make a profit of $5.00?",
    answer: 120
  },
  {
    question: "In a set of counting numbers, all have different values. Their sum is 350 and their average is 50. One of the numbers is 100. What is the greatest number that can be in the set?",
    answer: 235
  },
  {
    question: "A normal duck has two legs. A lame duck has one leg. A sitting duck has no legs. Donald has 33 ducks. He has two more normal ducks than lame ducks and two more lame ducks than sitting ducks. How many legs in all do the 33 ducks have?",
    answer: 37
  },
  {
    question: "Kristen has had her cat since it was a kitten. She said, If you multiply my cat age by 4, and then divide it by 12, you get 5. How old is my cat?",
    answer: 15
  },
  {
    question: "Fifteen streetlights are placed at equal distances along a road. The distance between the first and third lights is 600 meters, measured between their centers. What is the distance in meters between the first and last lights?",
    answer: 4200
  },
  {
    question: "A motorist travels 120 miles from Antwerp to Brussels at an average of 40 mph. She returns over the same road at M mph. Her average rate for the whole trip is 48 mph. What is the value of M?",
    answer: 60
  },
  {
    question: "Last week, Jessica beat Emily at checkers in 20% of their matches. Emily won 12 matches. How many matches did Jessica win?",
    answer: 3
  },
  {
    question: "Some friends buy a video game, sharing the cost equally. If each friend pays $8, they will have $11 too much. If each friend pays $6, they will have $5 too little. What is the price of the video game in dollars?",
    answer: 53
  },
  {
    question: "In simplest terms, what is the value of the following? 6/.3 + .3/.06",
    answer: 25
  },
  {
    question: "A palindrome is any number that reads the same forwards and backwards. Ex: 151, or 729927. How many five-digit palindromes are there?",
    answer: 900
  },
  {
    question: "What is the arithmetic mean (average) of all the positive two-digit multiples of four?",
    answer: 54
  },
  {
    question: "Express as a single fraction in lowest terms: (7/19)*(13/44) + (7/19)*(19/44) + (7/19)*(25/44) + (7/19)*(31/44).",
    answer: "14/19"
  },
  {
    question: "In lowest terms, how much greater is (2003/25)+25 than (2003+25)/25?",
    answer: 24
  },
  {
    question: "The large rectangle shown is composed of 5 congruent smaller rectangles, each with whole number dimensions. If the perimeter of each smaller rectangle is 20 cm, find the area of the entire large rectangle in sq cm.",
    answer: 80
  },
  {
    question: "What number is 3/4 of the way from -11 to -3?",
    answer: -5
  },
  {
    question: "What whole number between 100 and 200 is both a perfect square and a multiple of 7?",
    answer: 196
  },
  {
    question: "Noelle correctly adds the lengths of three sides of a rectangle and gets 88 cm. Ryan correctly adds the lengths of three sides of the same rectangle and gets 80 cm. What is the perimeter of the rectangle in cm?",
    answer: 112
  },
  {
    question: "The number 33,822 is divisible by 2, 3, 6, and 9. What is the next larger whole number also divisible by 2, 3, 6, and 9?",
    answer: 33840
  },
  {
    question: "Together Juan and Maria have 72 marbles. Juan gives Maria half his marbles and then 12 more marbles. Maria now has three times as many marbles as Juan. How many marbles did Maria have originally?",
    answer: 12
  },
  {
    question: "There are 25 students on the Geoville math team. 11 play chess, 15 play tennis, while 3 play neither chess nor tennis. How many students play chess, but not tennis?",
    answer: 7
  },
  {
    question: "Jeff has some coins. He can put the same number of coins into each of 9 bags, with no coins left over. He can put the same number of coins into each of 6 bags, with no coins left over. He can put the same number of coins into each of 5 bags, with 2 coins left over. What is the least number of coins Jeff could have?",
    answer: 72
  },
  {
    question: "Three brothers have the same birthday, but were born in different years. Four years ago, the oldest brother's age was 5 times the age of the youngest brother. At that time, the age of the middle brother was 3 times the age of the youngest brother. Today, the middle brother's age is twice the age of the youngest brother. Today, how old is the oldest brother?",
    answer: 24
  },
  {
    question: "A firefighter stood on the middle rung of a ladder, went up 3 rungs, was forced down 5 rungs, and then went up 7 rungs to extinguish the fire. Then the firefighter climbed the remaining 6 rungs to the top of the ladder. How many rungs are there on the entire ladder?",
    answer: 23
  },
  {
    question: "Kristen puts boots on her four cats. Each front leg has a boot with four eyelets. Each rear leg has a boot with six eyelets. Each of the four cats loses a different boot. (Note: an eyelet is a small hole for a shoelace.) What is the total number of eyelets in the remaining boots?",
    answer: 60
  },
  {
    question: "Seven congruent rectangles are arranged as shown below to form rectangle ABCD. If AB = 20, find the perimeter of rectangle ABCD.",
    answer: 68
  },
  {
    question: "Megan has three candles of the same length to provide light. Candle A burns for exactly 72 minutes. Candle B burns twice as fast as candle A. Candle C burns three times as fast as candle B. What is the greatest total number of minutes of light the three candles can provide?",
    answer: 120
  },
  {
    question: "A movie ticket costs $4 for children, $6 for senior citizens, and $10 for all others. If 7 people buy tickets, which of the following total sales figures is possible?\n$26, $37, $48, $57, $68, $75",
    answer: 48
  },
  {
    question: "An even number between 100 and 125 is divisible by 3 and also by 5. What is that number?",
    answer: 120
  },
  {
    question: "A telephone call costs 25¢ for the first three minutes and 3¢ for each additional minute. If Jason pays 40¢ for a call, for how many minutes does the call last?",
    answer: 8
  },
  {
    question: "The clock shown below loses 12 minutes every hour. It shows the correct time now. In how many hours will it next show the correct time?",
    answer: 60
  },
  {
    question: "A grocer bought 15 dozen oranges at $1.00 a dozen. She threw away 20 rotten oranges, and then sold the rest at 8 oranges for 85 cents. How much profit did the grocer make, in dollars and cents?",
    answer: 2
  },
  {
    question: "The September price of a computer was $1000. Later, an October price was obtained by raising the September price by 20%. Then a November price was obtained by lowering the October price by 20%. What was the November price in dollars?",
    answer: 960
  },
  {
    question: "Amanda, Beth, and Sarah run three races. In each race, one of them earns 5 points, one of them earns 3 points, and one of them earns 1 point. After the three races Beth has the highest point total.\n\nWhat is the smallest total score that Beth can have?",
    answer: 11
  },
  {
    question: "A single story house is to be built on a rectangular lot 70 feet wide by 100 feet deep. The shorter side of the lot is along the street. The house must be set back 30 feet from the street. It also must be 20 feet from the back lot line and 10 feet from each side lot line.\n\nWhat is the greatest area that the house can have, in sq ft?",
    answer: 2500
  },
  {
    question: "Jessie has $5.10 worth of stamps. She has equal numbers of 50-cent, 20-cent, 10-cent, and 5-cent stamps. She has no other stamps.\n\nHow many 50-cent stamps does she have?",
    answer: 6
  },
  {
    question: "A fenced rectangular garden is 10 m wide and 20 m long. When one side is moved outward and two other sides are increased in length, the area increases by 40 sq m.\n\nWhat is the fewest number of meters of additional fencing needed to form the larger rectangular garden?",
    answer: 4
  },
  {
    question: "A gumball machine contains red, green, yellow, and purple gumballs. You cannot control which color you get. Anna wants three gumballs of any one color.\n\nAt 5¢ each, what is the minimum number of cents that guarantees in advance three gumballs of the same color?",
    answer: 45
  },
  {
    question: "Each of three darts lands in a numbered region of the dart board, scoring the number of points shown. How many different sums are possible for the three darts?",
    answer: 7
  },
  {
    question: "At Hudson High School, the first class starts at 8:26 AM and the fourth class ends at 11:26 AM. There are 4 minutes between classes and each class is the same length.\n\nHow many minutes are there in one class period?",
    answer: 42
  },
  {
    question: "Dr. Bolton was born in an interesting year. The tens digit was twice the thousands digit, the ones digit was three times the tens digit, and the hundreds digit was equal to the sum of the other three digits.\n\nIn what year was she born?",
    answer: 1926
  },
  {
    question: "A quart of milk can feed either 6 cats or 10 kittens. Suppose there are 3 quarts of milk and 15 cats.\n\nAfter all the cats are fed, how many kittens can be fed with the leftover milk?",
    answer: 5
  },
  {
    question: "The cold water faucet of a bathtub can fill the tub in 15 minutes. The drain, when opened, can empty the full tub in 20 minutes. Suppose the tub is empty and the faucet and drain are both opened at the same time.\n\nHow long will it take to fill the tub?",
    answer: 60
  },
  {
    question: "Below is a 3 by 3 by 3 cube. Not all of the cubes are visible. Suppose the entire outside of the cube is painted red including the bottom.\n\nHow many different 2 by 2 by 2 cubes with exactly three red faces can be found in the shown cube?",
    answer: 8
  },
  {
    question: "A package weighs P pounds, P being a whole number. To ship this package by express costs $1.65 for the first five pounds and 12¢ for each additional pound. The total shipping cost was $3.45.\n\nHow many pounds did the package weigh?",
    answer: 20
  },
  {
    question: "Starting at the same time on opposite shores of a lake, two boats cross back and forth for 35 minutes without stopping. One boat needs 5 minutes to cross the lake. The other boat needs 7 minutes.\n\nWhat is the number of times during the 35 minutes that the faster boat passes the slower boat going in the same or opposite direction?",
    answer: 7
  },
  {
    question: "A sports arena has a total capacity of 20,000 fans and ushers. One usher is required for every 30 fans.\n\nWhat is the greatest number of fans that can be in attendance?",
    answer: 19354
  },
  {
    question: "A bookseller has 15 different novels: 4 are in German, 5 are in Spanish, and 6 are in French. Emma buys two novels. they are written in two different languages.\n\nIn how many different ways can this be done? *Ignore the order in which she buys them*",
    answer: 74
  },
  {
    question: "Ali and Ben have a total of 36 CDs. After Ali gives ben 40% of her CDs, Ben has twice as many as Ali.\n\nHow many cds did Ali have originally?",
    answer: 20
  },
  {
    question: "Lou eats 1 jelly bean on September 1st, 3 on September 2nd, 5 on September 3rd, and so on, through the 30 days of the month. Each day he eats 2 more than the day before.\n\nIn all, how many jelly beans does Lou eat in September?",
    answer: 900
  },
  {
    question: "Mr. Alvarez gives each of his students 4 sheets of paper and 16 sheets are left over. But if two students were absent, each of the remaining students would receive 5 sheets, with only 3 sheets left over.\n\nHow many sheets of paper does Mr. Alvarez have?",
    answer: 108
  },
  {
    question: "Three friends play a series of 8 games. For each game, the winner scores 8 points, the friend in second place scores 3 points, and the friend in last place scores 0 points. At the end of 8 games, Keri's score is 20 points.\n\nIn how many of the games did Keri finish last?",
    answer: 3
  },
  {
    question: "A piles of coins sits on a table. Sarah takes half of the coins plus 4 more. Then Nick takes 2. Then Joe takes 2 more than half of what is left. Finally Selena takes 5. Four coins remain on the table.\n\nHow many coins were on the table to start with?",
    answer: 56
  },
  {
    question: "Janine's number has three digits. One digit is a prime number. Another digit is a square number. The other digit is neither prime nor square. Her number is NOT divisible by 3.\n\nWhat is the greatest possible value of Janine's number?",
    answer: 985
  },
  {
    question: "A square with an area of 18 square centimeters is inscribed in a circle as shown.\n\nUsing the approximation π ≈ 3.14, find the area of the shaded region to the nearest square centimeter.",
    answer: 10
  },
  {
    question: "In a hotel, 40 people occupy exactly 26 rooms. Each room is occupied by either one or two people.\n\nHow many rooms are occupied by exactly one person?",
    answer: 12
  },
  {
    question: "In the following, different letters represent different digits.\n\nWhat digit does the letter O represent?",
    answer: 3
  },
  {
    question: "There are 2 red cars and 3 blue cars. The 5 cars contain a total of 12 people. No car has more than 4 people. Every car has at least 1 person. The only cars with the same number of people are the red cars.\n\nHow many people are in 1 red car?",
    answer: 2
  },
  {
    question: "Jess runs an outdoor stand at City Stadium. When it rains, Jess earns $1500 selling umbrellas. But when it doesn't rain, she earns $400 selling sunglasses. On any given day, the chance of rain is 40%.\n\nOn the average, how much can Jess expect to earn daily?",
    answer: 840
  },
  {
    question: "This year, 1 out of every 55 adults started a new business. This rate represented an increase of 20% over last year's rate of 1 new business start-up out of every N adults.\n\nFind N.",
    answer: 66
  },
  {
    question: "Kim was elected class president. She received 3 votes for every 2 that Amy got. No one else ran. However, if 8 people who voted for Kim had voted for Amy instead, Kim would have received only one vote for every two that Amy would have gotten.\n\nHow many people voted?",
    answer: 30
  },
  {
    question: "In one complete day, a man binds 100 books and his helper binds one-fourth as many books. If they take turns working complete days,\n\nhow many days would it take them to bind 500 books?",
    answer: 8
  },
  {
    question: "One light flashes every 2 minutes and another light flashes every 7 minutes. If both lights flash together at 1 PM,\n\nWhat is the first time after 3 PM that both lights flash together?",
    answer: 1506
  },
  {
    question: "In this diagram, each \"path\" spells the word OLYMPIAD correctly.\n\nHow many different paths exist in the diagram?",
    answer: 48
  },
  {
    question: "The figure below is a \"magic square\" with missing entries. When complete, the sum of the four entries in each column, each row, and each diagonal is the same.\n\nFind the value of A and the value of B.",
    answer: "1, 13"
  },
  {
    question: "A circular track is 1000 yards in circumference. Cyclists A, B, and C start at the same place and time, and race around the track at the following rates per minute: A at 700 yards, B at 800 yards, and C at 900 yards.\n\nWhat is the least number of minutes it must take for all three to be together again?",
    answer: 10
  },
  {
    question: "Alice started a Math Club during the first week of school. As the only member, she decided to recruit two new members during the following week of school. Each new member, during the week following the week when he or she became a member, recruits two new members.\n\nHow many members will the club have at the end of five weeks?",
    answer: 31
  },
  {
    question: "Twenty-four meters of fencing is used to fence a rectangular garden. Let M represents the number of square meters in the area of the garden.\n\nWhat is the largest value that M could have?",
    answer: 36
  },
  {
    question: "Two students are needed to work in the school store during the lunch hour every day, and four students volunteer for this work.\n\nWhat is the greatest number of days that can be arranged in which no pair of the four students works together more than once?",
    answer: 6
  },
  {
    question: "A purse contains 4 pennies, 2 nickes, 1 dime, and 1 quarter. Different values can be obtained by using one or more coins in the purse.\n\nHow many different values can be obtained?",
    answer: 49
  },
  {
    question: "When it is 7 AM in New York, it is noon in London. A plane leaves London at 12 PM (noon) London time and arrives in New York at 11 AM New York time the same day. A second plane leaves New York at 12 PM (noon) New York time for London.\n\nWhat time in London is it when the second plane arrives? *Assume both planes fly for the same number of hours*",
    answer: 2100
  },
  {
    question: "Ashley's locker number is a three-digit multiple of 5. The tens digit is the sum of the hundreds digit and the ones digit. The sum of all three digits is 16. No two digits are the same.\n\nWhat is Ashley's locker number?",
    answer: 385
  },
  {
    question: "What is the sum of the digits in this arrangement?",
    answer: 120
  },
  {
    question: "Six girls of differing heights are arranged in 2 rows of 3 each. Each girl is taller than the girl in front of her and also taller than the girl to her right.\n\nHow many arrangements of the six girls are possible?",
    answer: 5
  },
  {
    question: "The price of a candy bar has increased 20%.\n\nHow many candy bars can now be purchased for the amount of money that used to buy 42 candy bars?",
    answer: 35
  },
  {
    question: "Boris and Natasha start at the same place and at the same time on a 200 meter circular track and run in the same direction. Boris runs at 5 meters per second and Natasha runs at 3 meters per second.\n\nHow many meters has Natasha run when they first meet after starting?",
    answer: 300
  },
  {
    question: "Evaluate the following sum: 51 − 33 + 42 − 33 + 24 − 33 + 15 − 33.",
    answer: 0
  },
  {
    question: "Sarah wrote the whole numbers from 1 to 85. How many times did she write the digit 7?",
    answer: 18
  },
  {
    question: "Find the sum of the following nine products: 1 × (10 − 1), 2 × (10 − 2), 3 × (10 − 3), ..., 9 × (10 − 9).",
    answer: 165
  },
  {
    question: "Calculate: 8883 + 8838 + 8388 + 3888.",
    answer: 29997
  },
  {
    question: "What is the units digit of the total sum of the sequence 3, 8, 13, 18, ..., 98? (There are 20 numbers in the sequence).",
    answer: 0
  },
  {
    question: "Find the value of 100 − 98 + 96 − 94 + ... + 4 − 2.",
    answer: 50
  },
  {
    question: "A certain number is multiplied by 3, then 10 is added to the result. The final answer is 31. What was the original number?",
    answer: 7
  },
  {
    question: "In 10 minutes, 5 identical robots can fill 20 orders. If 8 robots worked at that same rate for an hour, how many orders would they fill?",
    answer: 192
  },
  {
    question: "Bert has 5 paper clips for every 3 Ernie has. If Bert gives Ernie 12 clips, they will have the same amount. How many did Bert have originally?",
    answer: 60
  },
  {
    question: "In a 25-question contest, 6 points are earned for correct answers and 4 points are deducted for incorrect ones. Joshua answered all questions and scored 100. How many were correct?",
    answer: 20
  },
  {
    question: "A bag contains 5 red marbles, 4 blue marbles, and 3 green marbles. What is the smallest number of marbles you must pull out (without looking) to be certain you have at least one of each color?",
    answer: 10
  },
  {
    question: "Anik bought 3 apples and 2 oranges for $2.40. Later, he bought 2 apples and 3 oranges for $2.10. What is the cost of one apple?",
    answer: 0.6
  },
  {
    question: "A square tablecloth with an area of 256 sq in. is folded in half repeatedly until it covers 8 sq in. How many times was it folded?",
    answer: 5
  },
  {
    question: "A rectangle measures 12 inches by 18 inches. It is cut into 6 identical squares. What is the perimeter of one square?",
    answer: 24
  },
  {
    question: "A cube has a volume of 64 cubic centimeters. What is the total surface area of the cube?",
    answer: 96
  },
  {
    question: "A rectangular floor is 10 feet by 12 feet. It is being tiled with square tiles that are 2 feet on each side. How many tiles are needed?",
    answer: 30
  },
  {
    question: "The perimeter of a rectangle is 30 cm. If the length is twice the width, what is the area of the rectangle?",
    answer: 50
  },
  {
    question: "Suppose WARM − COLD = 6591, and each letter represents a different digit from 0 through 7. What is the greatest four-digit number WARM?",
    answer: 7321
  },
  {
    question: "The number 2A5A0A2 is divisible by 99. What is the digit A?",
    answer: 9
  },
  {
    question: "In the problem 5A9 + 5A9 + 5A9 = PLAN, each letter is a different digit (none are 5 or 9). Determine the sum PLAN.",
    answer: 1707
  },
  {
    question: "If 3X + 7 = 22 and 4Y − 5 = 11, what is the value of X + Y?",
    answer: 9
  },
  {
    question: "The fraction 5/13 is 0.384615... repeating. What is the 2019th digit to the right of the decimal point?",
    answer: 8
  },
  {
    question: "What is the next number in the sequence: 1, 3, 6, 10, 15, ...?",
    answer: 21
  },
  {
    question: "A 3-digit number has digits in increasing order. The sum of the digits is 9, and the number is a multiple of 15. What is the number?",
    answer: 135
  },
  {
    question: "In the cryptarithm 5A9 + 5A9 + 5A9 = PLAN, each letter is a different digit. None of the letters can be 5 or 9. Find the sum PLAN.",
    answer: 1647
  },
  {
    question: "Kayla's 3-digit palindrome is divisible by 18 and is one less than a multiple of 5. What is the number?",
    answer: 414
  },
  {
    question: "In the problem 3 x FUN = HFUN, where different letters represent different digits, find the 3-digit number FUN.",
    answer: 450
  },
  {
    question: "A large cube is painted red on all faces and then cut into 27 smaller equal-sized cubes. How many of the small cubes have exactly two red faces?",
    answer: 12
  },
  {
    question: "In a class of 30 students, 18 like Math and 15 like Science. If 5 students like neither, how many students like both Math and Science?",
    answer: 8
  },
  {
    question: "Adam is older than Beth. Carol is younger than Beth. Adam's age is the sum of Beth's and Carol's ages. David is the twin of the second oldest. If Carol is 5 and Adam is 13, how old is David?",
    answer: 8
  },
  {
    question: "Find the next number in this sequence: 1, 3, 7, 15, 31, ...",
    answer: 63
  },
  {
    question: "Three apples and two bananas weigh 28 ounces. Two apples and three bananas weigh 27 ounces. What is the weight of one apple? Page 1 MATH OLYMPIADS (Division E) - Practice Set",
    answer: 6
  },
  {
    question: "The 7-digit numbers 47A5A20 and 47B5B20 are divisible by 24. Given that A > B, find the value of (A+B)(A-B).",
    answer: 72
  },
  {
    question: "The 7-digit numbers 29A4A80 and 29B4B80 are divisible by 24. Given that A > B, find the value of (A+B)(A-B).",
    answer: 27
  },
  {
    question: "The 7-digit numbers 51A7A20 and 51B7B20 are divisible by 24. Given that A > B, find the value of (A+B)(A-B).",
    answer: 72
  },
  {
    question: "The 7-digit numbers 84A3A40 and 84B3B40 are divisible by 24. Given that A > B, find the value of (A+B)(A-B).",
    answer: 72
  },
  {
    question: "The distance from A to 5 is twice the distance from A to 17. The distance from B to 5 is also twice the distance from B to 17. If A is to the left of B, find A + B.",
    answer: 42
  },
  {
    question: "The distance from A to -3 is three times the distance from A to 9. The distance from B to -3 is three times the distance from B to 9. If A is to the left of B, find A + B.",
    answer: 21
  },
  {
    question: "The distance from A to 12 is half the distance from A to 30. The distance from B to 12 is half the distance from B to 30. If A is to the left of B, find A + B.",
    answer: 12
  },
  {
    question: "The distance from A to 2 is three times the distance from A to 8. The distance from B to 2 is three times the distance from B to 8. If A is to the left of B, find A + B.",
    answer: 10
  },
  {
    question: "The distance from A to 4 is twice the distance from A to 10. The distance from B to 4 is twice the distance from B to 10. If A is to the left of B, find A + B.",
    answer: 16
  },
  {
    question: "Harper takes a number, multiplies it by a one-digit number, then adds a two-digit number. 16 becomes 58 and 22 becomes 76. What is Milo's number if Harper turns it into 40?",
    answer: 10
  },
  {
    question: "Evan uses his favorite one-digit and two-digit numbers to transform inputs. 10 becomes 43 and 18 becomes 67. What is Riley's number if Evan turns it into 55?",
    answer: 14
  },
  {
    question: "Sofia transforms 12 into 50 and 20 into 74. What is Jonah's number if Sofia turns it into 38?",
    answer: 8
  },
  {
    question: "Caleb transforms 15 into 57 and 25 into 87. What is Nina's number if Caleb turns it into 72?",
    answer: 20
  },
  {
    question: "Maya transforms 11 into 41 and 19 into 65. What is Leo's number if Maya turns it into 53? MOEMS-Style Math Challenge Packet",
    answer: 15
  },
  {
    question: "A drawer has 8 red, 6 green, and 10 blue socks. What is the least number of socks you must pull to guarantee at least one matching pair?",
    answer: 4
  },
  {
    question: "A drawer contains 5 black, 7 white, 9 gray, and 4 brown socks. What is the least number of socks you must pull to guarantee at least one matching pair?",
    answer: 5
  },
  {
    question: "A drawer has 14 red, 10 green, and 20 blue socks. What is the least number of socks you must pull to guarantee you have 2 matching pairs?",
    answer: 6
  },
  {
    question: "A drawer has 12 left-hand and 12 right-hand gloves. What is the least number of gloves you must pull to guarantee at least 2 complete pairs (one left and one right each)?",
    answer: 14
  },
  {
    question: "A closet has 9 red, 11 blue, and 7 green shirts. What is the least number of shirts you must grab to guarantee you have at least 3 shirts of the same color? MOEMS-Style Math Challenge Packet",
    answer: 7
  },
  {
    question: "Emma has twice as many pencils as Jack. Jack has 4 more pencils than Mia. Noah has triple the number of pencils that Mia has. Together, the four kids have 75 pencils. How many pencils does Jack have?",
    answer: 13
  },
  {
    question: "Carlos has twice as many books as Ava. Ava has 7 more books than Ethan. Lily has triple the number of books that Ethan has. Together, the four children have 91 books. How many books does Ava have?",
    answer: 17
  },
  {
    question: "Zoe has twice as many crayons as Leo. Leo has 3 more crayons than Harper. Mason has triple the number of crayons that Harper has. Together, the four kids have 65 crayons. How many crayons does Leo have?",
    answer: 11
  },
  {
    question: "Ella has twice as many apples as Ryan. Ryan has 8 more apples than Chloe. Oliver has triple the number of apples that Chloe has. Together, the four children have 94 apples. How many apples does Ryan have?",
    answer: 18
  },
  {
    question: "Isla has twice as many coins as Ben. Ben has 5 more coins than Grace. Henry has triple the number of coins that Grace has. Together, the four kids have 78 coins. How many coins does Ben have?",
    answer: 14
  },
  {
    question: "A list of numbers begins with 15, and each following number is 18 more than the previous number: 15, 33, 51, 69, and so on. The last number is 999. How many three-digit numbers are in the list?",
    answer: 50
  },
  {
    question: "A sequence starts at 12, and each term increases by 25: 12, 37, 62, 87, and so on. The last term is 987. How many three-digit numbers are in the sequence?",
    answer: 36
  },
  {
    question: "A list of numbers begins with 30, and each following number is 20 more than the previous number: 30, 50, 70, 90, and so on. The last number is 1010. How many three-digit numbers are in the list?",
    answer: 45
  },
  {
    question: "A sequence starts at 45, and each term increases by 15: 45, 60, 75, 90, and so on. The last term is 990. How many three-digit numbers are in the sequence?",
    answer: 60
  },
  {
    question: "A list of numbers begins with 28, and each following number is 22 more than the previous number: 28, 50, 72, 94, and so on. The last number is 1012. How many three-digit numbers are in the list?",
    answer: 41
  },
  {
    question: "Eight congruent rectangles are arranged to form a large rectangle with an area of 120 square cm, as shown in the diagram. The dimensions of each small rectangle are whole numbers. What is the number of centimeters in the perimeter of the large given rectangle?",
    answer: 52
  },
  {
    question: "Nine congruent rectangles are arranged to form a large rectangle with an area of 108 square cm, as shown in the diagram. The dimensions of each small rectangle are whole numbers. What is the number of centimeters in the perimeter of the large given rectangle?",
    answer: 42
  },
  {
    question: "Five congruent rectangles are arranged to form a large rectangle with an area of 75 square cm, as shown in the diagram. The dimensions of each small rectangle are whole numbers. What is the number of centimeters in the perimeter of the large given rectangle?",
    answer: 40
  },
  {
    question: "In a grid of 1 x 1 squares, Asha starts shading some 1 x1 squares. She will not shade a square that would share anything, including a corner, with any other shaded 1 x 1 square. What is the maximum number of 1 x 1 squares that could be shaded in a 12 x 16 grid? ❓",
    answer: 48
  },
  {
    question: "In a grid of 1 x 1 squares, Leo starts shading some 1 x 1 squares. He will not shade a square that would share anything, including a corner, with any other shaded 1 x 1 square. What is the maximum number of 1 x 1 squares that could be shaded in a 9 x 13 grid? ❓",
    answer: 35
  },
  {
    question: "In a grid of 1 x 1 squares, Maya starts shading some 1 x 1 squares. She will not shade a square that would share anything, including a corner, with any other shaded 1 x 1 square. What is the maximum number of 1 x 1 squares that could be shaded in a 14 x 14 grid? ❓",
    answer: 49
  },
  {
    question: "In a grid of 1 x 1 squares, Ken starts shading some 1 x 1 squares. He will not shade a square that would share anything, including a corner, with any other shaded 1 x 1 square. What is the maximum number of 1 x 1 squares that could be shaded in a 11 x 17 grid? ✅",
    answer: 54
  },
  {
    question: "The 6-digit numbers 47A5A20 and 47B5B20 are divisible by 24. A > B. Find (A+B)(A-B).",
    answer: 72
  },
  {
    question: "The 6-digit numbers 29A4A80 and 29B4B80 are divisible by 24. A > B. Find (A+B)(A-B).",
    answer: 27
  },
  {
    question: "The 7-digit numbers 51A7A20 and 51B7B20 are divisible by 24. A > B. Find (A+B)(A-B).",
    answer: 72
  },
  {
    question: "The 6-digit numbers 84A3A40 and 84B3B40 are divisible by 24. A > B. Find (A+B)(A-B).",
    answer: 72
  },
  {
    question: "A and B are on a number line. The distance from A to 5 is twice the distance from A to 17. The distance from B to 5 is twice the distance from B to 17. A is to the left of B. Find A + B.",
    answer: 42
  },
  {
    question: "A and B are on a number line. The distance from A to -3 is three times the distance from A to 9. The distance from B to -3 is three times the distance from B to 9. A is to the left of B. Find A + B.",
    answer: 21
  },
  {
    question: "A and B are on a number line. The distance from A to 12 is half the distance from A to 30. The distance from B to 12 is half the distance from B to 30. A is to the left of B. Find A + B.",
    answer: 12
  },
  {
    question: "A and B are on a number line. The distance from A to 2 is three times the distance from A to 8. The distance from B to 2 is three times the distance from B to 8. A is to the left of B. Find A + B.",
    answer: 10
  },
  {
    question: "A and B are on a number line. The distance from A to 4 is twice the distance from A to 10. The distance from B to 4 is twice the distance from B to 10. A is to the left of B. Find A + B.",
    answer: 16
  },
  {
    question: "Harper has a rule where she takes someone's number, multiplies it by her favorite one‑digit number, then adds her favorite two‑digit number. When Harper started with 16, she got 58. When she started with 22, she got 76. What is Milo's number if Harper would turn it into 40?",
    answer: 10
  },
  {
    question: "Evan has a rule where he takes someone's number, multiplies it by his favorite one‑digit number, then adds his favorite two‑digit number. When Evan started with 10, he got 43. When he started with 18, he got 67. What is Riley's number if Evan would turn it into 55?",
    answer: 14
  },
  {
    question: "Sofia has a rule where she takes someone's number, multiplies it by her favorite one‑digit number, then adds her favorite two‑digit number. When Sofia started with 12, she got 50. When she started with 20, she got 74. What is Jonah's number if Sofia would turn it into 38?",
    answer: 8
  },
  {
    question: "Caleb has a rule where he takes someone's number, multiplies it by his favorite one‑digit number, then adds his favorite two‑digit number. When Caleb started with 15, he got 57. When he started with 25, he got 87. What is Nina's number if Caleb would turn it into 72?",
    answer: 20
  },
  {
    question: "Maya has a rule where she takes someone's number, multiplies it by her favorite one‑digit number, then adds her favorite two‑digit number. When Maya started with 11, she got 41. When she started with 19, she got 65. What is Leo's number if Maya would turn it into 53?",
    answer: 15
  },
  {
    question: "Three colors of socks, one pair guaranteed A drawer has 8 red, 6 green, and 10 blue socks. You pull socks at random in the dark. What is the least number of socks you must pull to guarantee at least one matching pair? There are 3 colors. In the worst case, you pick 1 red, 1 green, 1 blue (3 socks, all different). The next sock must match one of these colors.",
    answer: 4
  },
  {
    question: "Four colors of socks, one pair guaranteed A drawer contains 5 black, 7 white, 9 gray, and 4 brown socks. What is the least number of socks you must pull to guarantee at least one matching pair? There are 4 colors. Worst case: you pick 1 of each color (4 socks, all different). The next sock must match one of them.",
    answer: 5
  },
  {
    question: "Three colors of socks, two matching pairs A drawer has 14 red, 10 green, and 20 blue socks. What is the least number of socks you must pull to guarantee you have 2 matching pairs (e.g., 2 red pairs, or 1 red pair + 1 green pair, etc.)? Let r,g,b be the numbers drawn of each color. The number of pairs is ⌊r/2⌋+⌊g/2⌋+⌊b/2⌋. To avoid having 2 pairs, this total must be at most 1. The maximum socks you can have with at most 1 pair is when one color has 3 socks and the others have 1 each: (3,1,1)⇒5 socks and only 1 pair. So with 5 socks, you can still have just 1 pair; the next sock forces at least 2 pairs.",
    answer: 6
  },
  {
    question: "Gloves instead of socks A drawer has 12 left-hand gloves and 12 right-hand gloves, all identical except for hand. You pull gloves at random in the dark. What is the least number of gloves you must pull to guarantee you can form at least 2 complete pairs (each pair is 1 left + 1 right)? To form 2 pairs, you need at least 2 left and 2 right. Worst case: you draw all of one hand first. You could draw all 12 left gloves before seeing a right glove. Then you start drawing right gloves: you need 2 of them to make 2 pairs. Total: 12 (all left) + 2 (two right) = 14.",
    answer: 14
  },
  {
    question: "Shirts by color A closet has 9 red shirts, 11 blue shirts, and 7 green shirts. You grab shirts at random (without looking). What is the least number of shirts you must grab to guarantee you have at least 3 shirts of the same color? To avoid 3 of any color, you can take at most 2 of each color: 2 red+2 blue+2 green=6 shirts With 6 shirts, you might have exactly 2 of each color. The next shirt (the 7th) must make some color reach 3.",
    answer: 7
  },
  {
    question: "What is the greatest three-digit number that leaves a remainder of 2 when divided by 6 and a remainder of 4 when divided by 7?",
    answer: 998
  },
  {
    question: "What is the greatest three-digit number that leaves a remainder of 5 when divided by 8 and a remainder of 2 when divided by 9?",
    answer: 965
  },
  {
    question: "What is the greatest three-digit number that leaves a remainder of 1 when divided by 4 and a remainder of 3 when divided by 5?",
    answer: 993
  },
  {
    question: "What is the greatest three-digit number that leaves a remainder of 4 when divided by 12 and a remainder of 7 when divided by 15?",
    answer: 952
  },
  {
    question: "What whole number is equal to: (84 x 13) + (84 x 87)",
    answer: 8400
  },
  {
    question: "Find the value of the following expression: (15 x 499) + (15 x 501) + 475",
    answer: 15475
  },
  {
    question: "What whole number is equal to: (25 x 93) x 4 + (100 x 107)",
    answer: 20000
  },
  {
    question: "Use a smart shortcut to find the value of: (14 x 55) - (14 x 45)",
    answer: 140
  },
  {
    question: "Every student in the fourth grade at Maple Elementary contributed a nickel. The total collected was $8.35. How many students were there?",
    answer: 167
  },
  {
    question: "Each student in the sixth grade donated a dime. The grade raised $12.40 in total. How many sixth graders are there?",
    answer: 124
  },
  {
    question: "Each student in the seventh grade donated a quarter. The grade raised $36.75. How many seventh graders are there?",
    answer: 147
  },
  {
    question: "Every student in the third grade donated a penny. The total collected was $3.21. How many third graders are there?",
    answer: 321
  },
  {
    question: "Each student in the fifth grade donated a quarter to the class party fund. The fifth grade raised $21.75 in total. How many fifth graders are there?",
    answer: 87
  },
  {
    question: "Each student in the eighth grade donated 50 cents. The eighth grade raised $92.50. How many eighth graders are there?",
    answer: 185
  },
  {
    question: "A shape was formed by removing one 2 x 2 square from the interior of an 8 x 8 square. What is the greatest number of 3 x 2 tiles that can be placed on the shape without overlapping?",
    answer: 10
  },
  {
    question: "A shape was formed by removing one 1 x 1 square from the corner of a 10 x 10 square. What is the greatest number of 5 x 2 tiles that can be placed on the shape without overlapping?",
    answer: 9
  },
  {
    question: "A shape was formed by removing one 3 x 3 square from the center of a 12 x 12 square. What is the greatest number of 4 x 3 tiles that can be placed on the shape without overlapping?",
    answer: 11
  },
  {
    question: "A shape was formed by removing one 2 x 1 rectangle from the interior of a 7 x 7 square. What is the greatest number of 3 x 1 tiles that can be placed on the shape without overlapping?",
    answer: 15
  },
  {
    question: "A shape was formed by removing one 2 x 2 square from the corner of an 8 x 8 square. What is the greatest number of 4 x 1 tiles that can be placed on the shape without overlapping?",
    answer: 15
  },
  {
    question: "A shape was formed by removing one 3 x 3 square from the center of a 9 x 9 square. What is the greatest number of 3 x 1 tiles that can be placed on the shape without overlapping?",
    answer: 24
  },
  {
    question: "What is the greatest three-digit number that leaves a remainder of 3 when divided by 11 and a remainder of 7 when divided by 13?",
    answer: 982
  },
  {
    question: "Each student in the sixth grade at Lincoln Middle School donated a dime to the school library fund. The sixth grade raised 12.40 in total. How many sixth graders are there at Lincoln Middle School?",
    answer: 124
  },
  {
    question: "Every student in the fourth grade at Maple Elementary contributed a nickel to the art supplies fund. The total amount collected was 8.35. How many fourth graders are there at Maple Elementary?",
    answer: 167
  },
  {
    question: "Each student in the seventh grade at Oakwood Junior High donated a quarter to the science fair fund. The seventh grade raised 36.75. How many seventh graders are there at Oakwood Junior High?",
    answer: 147
  },
  {
    question: "Every student in the third grade at Pinecrest Elementary donated a penny to the classroom pet fund. The total amount collected was 3.21. How many third graders are there at Pinecrest Elementary?",
    answer: 321
  },
  {
    question: "Each student in the eighth grade at Riverdale Middle School donated 50 cents to the field trip fund. The eighth grade raised 92.50. How many eighth graders are there at Riverdale Middle School?",
    answer: 185
  },
  {
    question: "What is the result of the following calculation? (29 x 61) + (29 x 39) + (67 x 10)",
    answer: 3570
  },
  {
    question: "The shape in the diagram was formed by removing one 2×2 square from the interior of an 8×8 square. What is the greatest number of 3×2 tiles that can be placed on the shape without overlapping, without covering the empty square, and without going beyond the border of the square?",
    answer: 10
  },
  {
    question: "The shape in the diagram was formed by removing one 1×1 square from the corner of a 10×10 square. What is the greatest number of 5×2 tiles that can be placed on the shape without overlapping, without covering the empty square, and without going beyond the border of the square?",
    answer: 9
  },
  {
    question: "The shape in the diagram was formed by removing one 3×3 square from the center of a 12×12 square. What is the greatest number of 4×3 tiles that can be placed on the shape without overlapping, without covering the empty square, and without going beyond the border of the square?",
    answer: 10
  },
  {
    question: "The shape in the diagram was formed by removing one 2×1 rectangle from the interior of a 7×7 square. What is the greatest number of 3×1 tiles that can be placed on the shape without overlapping, without covering the empty rectangle, and without going beyond the border of the square?",
    answer: 15
  },
  {
    question: "What is the greatest three-digit number that leaves a remainder of 2 when divided by 5 and a remainder of 3 when divided by 7?",
    answer: 997
  },
  {
    question: "What is the greatest three-digit number that leaves a remainder of 3 when divided by 4 and a remainder of 4 when divided by 9?",
    answer: 967
  },
  {
    question: "Each student in the fifth grade at Washington Elementary donated a quarter to the class party fund. The fifth grade raised $21.75 in total. How many fifth graders are there at Washington Elementary?",
    answer: 87
  },
  {
    question: "Every student in the third grade at Jefferson School contributed a nickel to the library fund. The total amount collected was $6.45. How many third graders are there at Jefferson School?",
    answer: 129
  },
  {
    question: "What whole number is equal to: (56 x 23) + (56 x 77) + (88 x 50)",
    answer: 10000
  },
  {
    question: "Find the value of the following expression: (82 x 49) + (82 x 51)",
    answer: 8200
  },
  {
    question: "Use a smart shortcut to find the value of: (32 x 115) - (32 x 15)",
    answer: 3200
  },
  {
    question: "What whole number is equal to: (25 x 18) x 4 + (150 x 2)",
    answer: 2100
  },
  {
    question: "The shape in the diagram below was formed by removing one 2 x 2 square from the corner of an 8 x 8 square. What is the greatest number of 4 x1 tiles that can be placed on the shape without overlapping, without covering the empty square, and without going beyond the border of the square?",
    answer: 14
  },
  {
    question: "The shape in the diagram below was formed by removing one 3 x 3 square from the center of a 9 x 9 square. What is the greatest number of 3 x 1 tiles that can be placed on the shape without overlapping, without covering the empty square, and without going beyond the border of the square?",
    answer: 24
  },
  {
    question: "Every student in the third grade at Pinecrest Elementary donated a penny to the classroom pet fund. If the total amount collected was $3.21, how many third graders are there?",
    answer: 321
  },
  {
    question: "Every student in the fourth grade at Maple Elementary contributed a nickel to the art supplies fund. If the total amount collected was $8.35, how many fourth graders are there?",
    answer: 167
  },
  {
    question: "Each student in the sixth grade at Lincoln Middle School donated a dime to the school library fund. If the grade raised $12.40 in total, how many sixth graders are there?",
    answer: 124
  },
  {
    question: "Each student in the fifth grade at Washington Elementary donated a quarter to the class party fund. If the grade raised $21.75 in total, how many fifth graders are there?",
    answer: 87
  },
  {
    question: "Each student in the eighth grade at Riverdale Middle School donated 50 cents to the field trip fund. If the eighth grade raised $92.50, how many students are there?",
    answer: 185
  },
  {
    question: "Use a smart shortcut to find the value of the following expression: (14 x 55) - (14 x 45)",
    answer: 140
  },
  {
    question: "Find the whole number equal to the following expression: (84 x 13) + (84 x 87)",
    answer: 8400
  },
  {
    question: "Calculate the result of the following calculation: (29 x 61) + (29 x 39) + (67 x 10)",
    answer: 3570
  },
  {
    question: "A shape was formed by removing one 2 x 2 square from the corner of an 8 x 8 square. What is the greatest number of 4 x 1 tiles that can be placed on the shape without overlapping or covering the empty square?",
    answer: 14
  },
  {
    question: "Find the value of the sum: 1 + 2 + 3 + 4 + ... + 19 + 20.",
    answer: 210
  },
  {
    question: "Sarah writes down all the counting numbers from 1 to 100. How many times does she write the digit 7?",
    answer: 20
  },
  {
    question: "If you multiply out the expression 24 X 32 X 53, how many zeros are at the end of the resulting number?",
    answer: 3
  },
  {
    question: "What is the smallest 3-digit number that is divisible by both 4 and 9?",
    answer: 108
  },
  {
    question: "A two-digit number is 18 more than the number formed by reversing its digits. What is the di erence between the tens digit and the ones digit?",
    answer: 2
  },
  {
    question: "The product of Jimmy's and Kimmy's secret prime numbers is 34. The product of Kimmy's and Timmy's secret prime numbers is 85. What is the sum of Jimmy's, Kimmy's, and Timmy's primes?",
    answer: 24
  },
  {
    question: "What is the smallest whole number whose digits add up to exactly 28?",
    answer: 1999
  },
  {
    question: "A mystery number leaves a remainder of 9 when divided by 10, and a remainder of 8 when divided by 9. What is the smallest such number?",
    answer: 89
  },
  {
    question: "How many total factors (divisors) does the number 48 have?",
    answer: 10
  },
  {
    question: "A palindrome is a number that reads the same forward and backward (like 424). What is the largest 3-digit palindrome whose digits add up to a prime number?",
    answer: 959
  },
  {
    question: "The five-digit number 12A45 is exactly divisible by 11. What is the value of the digit A?",
    answer: 0
  },
  {
    question: "THE 99 RULE: Find the digits A and B such that the 5-digit number 7A28B is divisible by 99. Write your answer as the 2-digit number AB.",
    answer: "0, 1"
  },
  {
    question: "In the addition problem ABA + B = 600, where A and B are di erent digits, what is the value of the product A x B?",
    answer: 45
  },
  {
    question: "In the famous addition SEND + MORE = MONEY, where each letter is a unique digit, what digit is represented by the letter M?",
    answer: 1
  },
  {
    question: "What is the smallest positive number that leaves a remainder of 1 when divided by 2, 3, 4, 5, and 6?",
    answer: 61
  },
  {
    question: "What is the smallest positive integer n such that 150 \\X n results in a perfect square?",
    answer: 6
  },
  {
    question: "What is the units (last) digit of the number 320?",
    answer: 1
  },
  {
    question: "A printer uses individual metal stamps for digits to number the pages of a book from 1 to 150. How many total digit stamps were used?",
    answer: 342
  },
  {
    question: "The product of three consecutive integers is 120. What is the sum of these three integers?",
    answer: 15
  },
  {
    question: "Find the digits A and B such that the 5-digit number 7A28B is divisible by 99.",
    answer: 10
  },
  {
    question: "How many zeros are at the end of the product: 25×32×54×71?",
    answer: 2
  },
  {
    question: "How many 5-digit palindromic numbers have a digit sum of exactly 14?",
    answer: 25
  },
  {
    question: "The product of A and B is 34. The product of B and C is 85. What is A+B+C?",
    answer: 24
  },
  {
    question: "In the addition ABA+B=600, what is the value of A×B?",
    answer: 45
  },
  {
    question: "A 4-digit number has consecutive digits (e.g., 1234). If the number is also prime, what is it?",
    answer: 4567
  },
  {
    question: "When a number is divided by 3, the remainder is 2. When divided by 5, the remainder is 4. What is the smallest such number?",
    answer: 14
  },
  {
    question: "Find the smallest number whose digits add up to 25.",
    answer: 799
  },
  {
    question: "How many factors does the number 36 have?",
    answer: 9
  },
  {
    question: "Summation: Find the value of: 8883 + 8838 + 8388 + 3888.",
    answer: 29997
  },
  {
    question: "Subtraction Patterns: Evaluate the following: 98 - 87 + 76 - 65 + 54 - 43 + 32 - 21.",
    answer: 44
  },
  {
    question: "Multiples: The number 2022 is a multiple of 6. Including 2022, how many 4-digit numbers of the form B0BB (where B is a digit) are divisible by 6?",
    answer: 4
  },
  {
    question: "Product Logic: The product of Jimmy's and Kimmy's prime numbers is 34. The product of Kimmy's and Timmy's primes is 85. What is the sum of their three prime numbers?",
    answer: 24
  },
  {
    question: "Divisibility: Find the least 3-digit number greater than 200 that is a multiple of 6 and has a sum of digits equal to 9.",
    answer: 216
  },
  {
    question: "Mental Math: Evaluate: 13 x 20 - 15 x 9 + 20 x 7 - 6 x 15. (Hint: Try using the distributive property).",
    answer: 215
  },
  {
    question: "Units Digit: In the list of numbers 3, 8, 13, 18, ... , 98, there are 20 numbers. What is the units digit of their sum?",
    answer: 0
  },
  {
    question: "Perimeter: A figure is created by placing five rectangles side-by-side. Each has a base of 2 cm. Their heights are 1 cm, 2 cm, 4 cm, 6 cm, and 8 cm. Find the total perimeter of the figure.",
    answer: 36
  },
  {
    question: "Square Areas: The area of a square is less than 200 cm2. The side length is a whole number. What is the greatest possible perimeter of this square?",
    answer: 56
  },
  {
    question: "Rectangle Perimeter: A rectangle has a perimeter of 26 cm. If the length and width are both whole numbers, what is the greatest possible area?",
    answer: 42
  },
  {
    question: "Counting Shapes: How many squares of any size can be found in a 4 x 4 grid of unit squares?",
    answer: 30
  },
  {
    question: "Volume: What is the maximum number of 3 x 3 x 2 bricks that can fit into a box with dimensions 13 x 8 x 4?",
    answer: 16
  },
  {
    question: "Shaded Fractions: A 4 x 4 grid has 6 of its unit squares shaded. What fraction of the entire figure is shaded? (Give your answer in simplest form).",
    answer: "3/8"
  },
  {
    question: "The Donut Shop: Mini-donuts are sold in boxes of 5, 10, and 20. What is the least number of boxes you must buy to get exactly 95 mini-donuts?",
    answer: 6
  },
  {
    question: "Stakes in a Garden: Ten stakes are placed in a straight line at equal intervals. The distance between the 1st and 4th stake is 10 feet. How far apart are the 1st and 10th stakes?",
    answer: 30
  },
  {
    question: "Marble Guessing: Five students guessed the number of marbles in a jar: 98, 105, 109, 113, and 115. Two students were exactly 3 away from the actual number. Who won the contest by being the closest?",
    answer: 113
  },
  {
    question: "Money Drawer: Lenny sold lemonade for 1.25 per cup. He started with some change (less than 1.25) and ended with 29.22. How many cups did he sell?",
    answer: 23
  },
  {
    question: "Seating Rows: A theater has 30 rows. The first row has 20 seats, and each row after has 2 more seats than the one before. How many seats are in the last row?",
    answer: 78
  },
  {
    question: "Cryptarithm: In the equation AA + BB = CBC, each letter represents a different digit. What is the value of the 3-digit number CBC?",
    answer: 121
  },
  {
    question: "The Largest Multiple: The 5-digit number 52A6B is divisible by both 4 and 9. What is the largest possible value for this 5-digit number?",
    answer: 52668
  },
  {
    question: "The String of Digits: A very large number N is created by writing the numbers from 1 to 15 in a row: N = 123456789101112131415. Is N divisible by 3? Explain why or why not.",
    answer: 1
  },
  {
    question: "The Common Multiple: What is the smallest 4-digit number that is divisible by 2, 3, 4, 5, and 6?",
    answer: 1020
  },
  {
    question: "The Mystery Digit: In the 3-digit number 8R4, R represents a missing digit. If the number is divisible by 7, what digit does R represent?",
    answer: 5
  },
  {
    question: "The Team Captain: A gym teacher has a group of students. The students can be divided into equal teams of 3, 4, or 5 with no students left over. What is the smallest possible number of students in the group?",
    answer: 60
  },
  {
    question: "The Divisibility Duo: Find the smallest 5-digit number of the form 7D21E that is divisible by 18. (Hint: To be divisible by 18, a number must be divisible by both 2 and 9).",
    answer: 70218
  },
  {
    question: "Sum of Possibilities: The 4-digit number 3,4A2 is divisible by 3. What is the sum of all possible values for the digit A?",
    answer: 18
  },
  {
    question: "The Rotating Number: A 3-digit number ABC is divisible by 5. The number BCA is divisible by 9. The number CAB is divisible by 4. If A, B, and C are all non-zero digits, what is the value of the original number ABC?",
    answer: 765
  },
  {
    question: "The Permutation Challenge: Using each of the digits 1, 2, 3, 4, 5, and 6 exactly once, what is the smallest 6-digit number that is divisible by 8?",
    answer: 123456
  },
  {
    question: "The \"Lucky\" Number: A number is called \"lucky\" if it is divisible by the sum of its digits. For example, 12 is lucky because 1+2=3, and 12 is divisible by 3. What is the largest lucky 2-digit number?",
    answer: 90
  },
  {
    question: "The Palindrome Search A palindrome is a number that reads the same forwards and backwards (like 121). What is the largest three-digit palindrome that is divisible by 15?",
    answer: 585
  },
  {
    question: "The Missing Digit The five-digit number 47,A28 is divisible by 9. What is the value of the digit A?",
    answer: 6
  },
  {
    question: "The Smallest Construction Find the smallest 4-digit number of the form 5,2N6 (where N is a digit) that is divisible by 6.",
    answer: 5226
  },
  {
    question: "The Mystery Multiple A whole number X is between 50 and 100. X is divisible by 3. X is divisible by 4. When X is divided by 5, the remainder is 2. What is the value of X?",
    answer: 72
  },
  {
    question: "The Alternating Rule A four-digit number is written as 2,0A5. If this number is divisible by 11, what is the value of the digit A?",
    answer: 3
  },
  {
    question: "The Sum of Possibilities The three-digit number 72B is divisible by 8. What is the sum of all possible values for the digit B?",
    answer: 8
  },
  {
    question: "The Fast and the Steady Alex can shovel a snow-covered driveway in 45 minutes. Ben, using a larger shovel, can do the same job in 30 minutes. If they work together to shovel one driveway, how many minutes will it take them to finish?",
    answer: 18
  },
  {
    question: "The Printer Race Printer A can finish a school newsletter job in 10 minutes. Printer B is slower and takes 15 minutes for the same job. If both printers are started at exactly 2:00 PM, at what time will the newsletter job be completed?",
    answer: 1406
  },
  {
    question: "The Leaky Pool A backyard pool can be filled by a high-pressure hose in 6 hours. However, the pool has a small drainage valve at the bottom that can empty a full pool in 10 hours. If the pool starts empty and both the hose and the drainage valve are opened at the same time, how many hours will it take to fill the pool?",
    answer: 15
  },
  {
    question: "The Triple Team Cathy and David can paint a room together in 4 hours. David and Elena can paint the same room in 6 hours. Cathy and Elena can paint it in 3 hours. If all three friends work together, how many hours will it take them to paint the room?",
    answer: "8/3"
  },
  {
    question: "The Garage Marathon Sam can clean half of a garage in 3 hours. Jordan can clean the other half of the garage in 5 hours. If they decide to work together to clean the entire garage from start to finish, how many minutes will it take them?",
    answer: 225
  },
  {
    question: "The Lawn Division Aiden can mow the lawn in 2 hours, and Lily can mow the same lawn in 3 hours. They start mowing the lawn together at 1:00 PM. What fraction of the lawn is still left to be mowed at 2:00 PM?",
    answer: "1/6"
  },
  {
    question: "The Cookie Factory Maria can bake a full batch of cookies in 60 minutes. Zoe is a bit slower and takes 90 minutes to bake the same batch. If they work together using two separate ovens, how many full batches of cookies can they complete in 6 hours?",
    answer: 10
  },
  {
    question: "The Filling Fiasco Hose A can fill a pool in 8 hours. Hose B can fill the same pool in 12 hours. If both hoses are turned on at the same time, but Hose A is turned off after exactly 2 hours, how many additional hours will it take Hose B to finish filling the pool?",
    answer: 9
  },
  {
    question: "The Painting Deadline Ella can paint a fence in 3 hours, and Max can paint it in 4 hours. They start painting together at 10:00 AM. To the nearest whole minute, at what time will they finish the job? 💡",
    answer: 1143
  },
  {
    question: "The Smallest Sum. In the cryptarithm below, each letter represents a different digit from 0 to 9. No word can start with the digit 0. Find the smallest possible sum for this addition.",
    answer: 20468
  },
  {
    question: "The Logic of Carrying. In the following addition, different letters represent different digits. Find the value of the two-digit number.",
    answer: 37
  },
  {
    question: "Solving for Specific Digits. Given the following addition where each letter is a unique digit. If two letters are given, find the value of the product.",
    answer: 504
  },
  {
    question: "The \"SCHOOL\" Subtraction. Identical letters represent the same digit, and different letters represent different digits. If two letters are given, what is the value of the remaining digit?",
    answer: 7
  },
  {
    question: "Maximizing a Word. The word MATH is added to itself to create the word GAMES. If a leading letter is given, what is the greatest possible value for the digit S?",
    answer: 8
  },
  {
    question: "Museum Field Trip: The city museum charges a flat group fee plus a fee per student. Mr. Lopez brings 18 students and pays $162. Ms. Chen brings 24 students and pays $198. What is the museum's group fee?",
    answer: 54
  },
  {
    question: "Ice Skating Rink: A skating rink charges a group admission fee plus a cost per skater. A group of 12 skaters pays $96. Another group of 18 skaters pays $132. What is the group admission fee?",
    answer: 24
  },
  {
    question: "Aquarium Visit: The aquarium charges a fixed group fee plus a fee per child. A daycare group with 10 children pays $85. Another group with 15 children pays $115. What is the aquarium's group fee?",
    answer: 25
  },
  {
    question: "Bowling Alley Party: A bowling alley charges a party reservation fee plus a cost per bowler. A group of 8 bowlers pays $74. A group of 11 bowlers pays $95. What is the reservation fee?",
    answer: 18
  },
  {
    question: "Science Center Tour: The science center charges a flat group fee plus a fee per student. A class of 20 students pays $180. A class of 25 students pays $215. What is the group fee?",
    answer: 40
  },
  {
    question: "What is the least prime number that can be added to 10 so that the sum is also a prime number?",
    answer: 3
  },
  {
    question: "What is the least prime number that can be added to 15 so that the sum is also a prime number?",
    answer: 2
  },
  {
    question: "What is the least prime number that can be added to 18 so that the sum is also a prime number?",
    answer: 5
  },
  {
    question: "What is the least prime number that can be added to 21 so that the sum is also a prime number?",
    answer: 2
  },
  {
    question: "What is the least prime number that can be added to 30 so that the sum is also a prime number?",
    answer: 7
  },
  {
    question: "What could be the total surface area (TSA) of a structure where 1 cube has a surface area of 5 square units?",
    answer: 5
  },
  {
    question: "Solve the addition problem ACT + DOG = COP given that: The digits 1, 4, and 7 are not used. All letters stand for distinct digits. No number starts with 0.",
    answer: "903, 960"
  },
  {
    question: "The Pizza Party A pizza parlor charges a delivery fee plus a cost for each pizza ordered. An order of 3 pizzas costs $41. An order of 5 pizzas costs $63. What is the delivery fee?",
    answer: 8
  },
  {
    question: "The Zoo Trip A local zoo charges a flat fee for a bus permit plus an entrance fee for each student. A group of 15 students pays $105. A group of 22 students pays $147. How much is the entrance fee for one student?",
    answer: 6
  },
  {
    question: "The Bowling Alley To rent a lane, a bowling alley charges a fixed \"shoe rental\" total for the group plus a price per game played. If a family plays 4 games, they pay $34. If they play 7 games, they pay $55. How much would they pay for 10 games?",
    answer: 76
  },
  {
    question: "The Art Class An art studio charges a registration fee plus a fee for every canvas used. Jamie used 4 canvases and paid $50. Sam used 9 canvases and paid $90. How much is the registration fee?",
    answer: 18
  },
  {
    question: "The Science Fair A science fair charges a school-wide entry fee plus a fee for every project board submitted. School A sends 12 projects and pays $170. School B sends 20 projects and pays $250. How much would School C pay if they send 30 projects?",
    answer: 350
  },
  {
    question: "The Concert Hall (Arithmetic Series) In the \"Star Theater,\" the first row has 15 seats. Every row behind it has 3 more seats than the row in front of it. If the theater has 12 rows, how many seats are in the 12th row?",
    answer: 48
  },
  {
    question: "The School Bus (Logical Constraints) Three friends-Abby, Ben, and Chloe-are sitting in a row of three seats on a bus. Abby refuses to sit next to Chloe. In how many different ways can the three friends be seated?",
    answer: 2
  },
  {
    question: "The Banquet Table (Pattern Growth) A square table can seat 4 people (1 person on each side). If you push two square tables together to form a long rectangle, you can seat 6 people. If you push 10 square tables together in a single long row, how many people can be seated?",
    answer: 22
  },
  {
    question: "The Stadium Section (Total Sums) A small section of a stadium has 5 rows. The first row has 10 seats, the second has 12, the third has 14, and so on. What is the total number of seats in this entire section?",
    answer: 70
  },
  {
    question: "Let a @ b = a / (2a + b). What is the value of 5 @ 3? Express your answer as a common fraction.",
    answer: "5/13"
  },
  {
    question: "How many rectangles of any size are in the grid shown here?",
    answer: 18
  },
  {
    question: "Given 7x + 13 = 328, what is the value of 14x + 13?",
    answer: 643
  },
  {
    question: "What is the median of the positive perfect squares less than 250? x+5 2",
    answer: 64
  },
  {
    question: "If (x+5)/(x-2) = 2/3, what is the value of x?",
    answer: -19
  },
  {
    question: "In rectangle TUVW, shown here, WX = 4 units, XY = 2 units, YV = 1 unit and UV = 6 units. What is the absolute difference between the areas of triangles TXZ and UYZ? W X Y V Z",
    answer: 0
  },
  {
    question: "A bag contains 4 blue, 5 green and 3 red marbles. How many green marbles must be added to the bag so that 75 percent of the marbles are green?",
    answer: 16
  },
  {
    question: "MD rides a three wheeled motorcycle called a trike. MD has a spare tire for his trike and wants to occasionally swap out his tires so that all four will have been used for the same distance as he drives 25,000 miles. How many miles will each tire drive?",
    answer: 18750
  },
  {
    question: "Lucy and her father share the same birthday. When Lucy turned 15 her father turned 3 times her age. On their birthday this year, Lucy's father turned exactly twice as old as she turned. How old did Lucy turn this year?",
    answer: 30
  },
  {
    question: "The sum of three distinct 2-digit primes is 53. Two of the primes have a units digit of 3, and the other prime has a units digit of 7. What is the greatest of the three primes?",
    answer: 23
  },
  {
    question: "Ross and Max have a combined weight of 184 pounds. Ross and Seth have a combined weight of 197 pounds. Max and Seth have a combined weight of 189 pounds. How many pounds does Ross weigh?",
    answer: 96
  },
  {
    question: "What is the least possible denominator of a positive rational number whose repeating decimal representation is 0.AB , where A and B are distinct digits? 1",
    answer: 11
  },
  {
    question: "A taxi charges $3.25 for the first mile and $0.45 for each additional 1/4 mile thereafter. At most, how many miles can a passenger travel using $13.60? Express your answer as a mixed number.",
    answer: 6.75
  },
  {
    question: "Kali is mixing soil for a container garden. If she mixes 2 m3 of soil containing 35% sand with 6 m3 of soil containing 15% sand, what percent of the new mixture is sand?",
    answer: 20
  },
  {
    question: "Alex can run a complete lap around the school track in 1 minute, 28 seconds, and Becky can run a complete lap in 1 minute, 16 seconds. If they begin running at the same time and location, how many complete laps will Alex have run when Becky passes him for the first time?",
    answer: 6
  },
  {
    question: "The Beavers, Ducks, Platypuses and Narwhals are the only four basketball teams remaining in a single-elimination tournament. Each round consists of the teams playing in pairs with the winner of each game continuing to the next round. If the teams are randomly paired and each has an equal probability of winning any game, what is the probability that the Ducks and the Beavers will play each other in one of the two rounds? Express your answer as a common fraction.",
    answer: "1/2"
  },
  {
    question: "A function f (x) is defined for all positive integers. If f (a) + f (b) = f (ab) for any two positive integers a and b and f (3) = 5, what is f (27)? A 6 B",
    answer: 15
  },
  {
    question: "5 Rectangle ABCD is shown with AB = 6 units and AD = 5 units. If AC is extended to point E such that D C AC is congruent to CE, what is the length of DE? E",
    answer: 13
  },
  {
    question: "The digits of a 3-digit integer are reversed to form a new integer of greater value. The product of this new integer and the original integer is 91,567. What is the new integer?",
    answer: 721
  },
  {
    question: "A spinner is divided into 5 sectors as shown. Each of the central 1 5 angles of sectors 1 through 3 measures 60° while each of the 2 central angles of sectors 4 and 5 measures 90°. If the spinner is 4 3 spun twice, what is the probability that at least one spin lands on an even number? Express your answer as a common fraction.",
    answer: "95/144"
  },
  {
    question: "The student council at Round Junior High School has eight members who meet at a circular table. If the four officers must sit together in any order, how many distinguishable circular seating orders are possible? Two seating orders are distinguishable if one is not a rotation of the other.",
    answer: 576
  },
  {
    question: "Initially, a chip is placed in the upper-left corner square of a 15 × 10 grid of squares as shown. The chip can move in an L-shaped pattern, moving two squares in one direction (up, right, down or left) and then moving one square in a corresponding perpendicular direction. What is the minimum number of L-shaped moves needed to move the chip from its initial location to the square marked \"X\"? x",
    answer: 9
  },
  {
    question: "On line segment AE, shown here, B is the midpoint of segment AC and D is the midpoint of segment CE. If AD = 17 units and BE = 21 units, what is the length of segment AE? Express your answer as a common fraction. A B C D E",
    answer: "76/3"
  },
  {
    question: "There are twelve different mixed numbers that can be created by substituting three of the numbers 1, 2, 3 and 5 for a, b and c in the expression a b/c, where b < c. What is the mean of these twelve mixed numbers? Express your answer as a mixed number.",
    answer: 2.6
  },
  {
    question: "If 738 consecutive integers are added together, where the 178th number in the sequence is 4,256,815, what is the remainder when this sum is divided by 6?",
    answer: 3
  },
  {
    question: "Consider a coordinate plane with the points A(−5, 0) and B(5, 0). For how many points X in the plane is it true that XA and XB are both positive integer distances, each less than or equal to 10?",
    answer: 119
  },
  {
    question: "The function f (n) = a ⋅ n! + b, where a and b are positive integers, is defined for all positive integers. If the range of f contains two numbers that differ by 20, what is the least possible value of f (1)?",
    answer: 5
  },
  {
    question: "In the list of numbers 1, 2, …, 9999, the digits 0 through 9 are replaced with the letters A through J, respectively. For example, the number 501 is replaced by the string \"FAB\" and 8243 is replaced by the string \"ICED\". The resulting list of 9999 strings is sorted alphabetically. How many strings appear before \"CHAI\" in this list?",
    answer: 1899
  },
  {
    question: "If 20 + XY + 19 = 100, compute 20 + YX - 19. (X and Y represent the digits of the 2-digit numbers XY and YX.)",
    answer: 17
  },
  {
    question: "A car moved 1 second at a constant rate of 2 m/sec, then 1 second at a constant rate of 4 m/sec, then 1 second at a constant rate of 6 m/sec, and so on. All movements were in the same direction. In how many seconds would the total distance covered by the car be 110 meters?",
    answer: 10
  },
  {
    question: "Gary and Mary have the same number of candies. If Gary gives Mary half of all his candies, and then Mary gives Gary half of all the candies she has at the moment, Gary would have 12 more candies than Mary. How many candies do Gary and Mary have altogether?",
    answer: 48
  },
  {
    question: "Numbers were written in 1000 boxes in a row, one number per box (only the first ten and the last five boxes are shown). For every four boxes in a row, the sum of their numbers was 12. Most of the numbers got erased over time, but three of them remain. What number was written in the last box on the right? 0 1 2 ...",
    answer: 9
  },
  {
    question: "Four cats - Astro, Buttons, Calico, and Duchess - bought 30 mice altogether. Each of the four cats bought an odd number of mice. Buttons bought more mice than Astro, and Calico bought fewer mice than Duchess. What is the greatest number of mice that could have been bought by Astro and Calico altogether?",
    answer: 12
  },
  {
    question: "The area of a regular hexagon RASHMI S H is 9102 square feet. Compute the area (in square feet) of the triangle A M R I 5-6 Test Location",
    answer: 4551
  },
  {
    question: "Fatima drew a rectangle with side lengths that were whole numbers. The perimeter of the rectangle was a multiple of 7 and the area was a multiple of 9. Compute the least possible perimeter of Fatima's rectangle.",
    answer: 28
  },
  {
    question: "How many quadrilaterals of all sizes and positions are there in the diagram, including quadrilaterals that are made up of more than one shape? 9 Stretch and Shorty are friends. Every January 1st they get measured and they write down the date, Stretch's height, Shorty's height, their total height, and their height difference (the amount by which Stretch is taller than Shorty). From January 1st, 2018, to January 1st, 2019, Stretch grew 5%, Shorty grew 2%, their total height increased by 4%, and their height difference increased by X%. Compute the value of X.",
    answer: 52
  },
  {
    question: "How many different whole numbers are there containing only the digits 1 and/or 2 (each of these digits can be used one or more times or not at all) such that for each of these numbers, the sum of all of its digits equals seven?",
    answer: 21
  },
  {
    question: "A teacher gave her students a paper square. The first student cut this square into two shapes, using one straight cut not through any of the paper's corners. The second student cut one of the resulting shapes, using one straight cut not through any of that shape's corners, and so on. After ten students had made their cuts, there were eleven shapes, including seven triangles, two quadrilaterals, and a pentagon. How many sides were in the remaining shape?",
    answer: 10
  },
  {
    question: "Say that a whole number is \"five-important\" if it is a multiple of 5 and/or contains the digit 5. For instance, the numbers 55, 120, and 456 are five-important, but the number 2019 is not. How many different five-important numbers are there between 1 and 2019?",
    answer: 707
  },
  {
    question: "Stretch and Shorty are friends. Every January 1st they get measured and they write down the date, Stretch's height, Shorty's height, their total height, and their height difference (the amount by which Stretch is taller than Shorty). From January 1st, 2018, to January 1st, 2019, Stretch grew 5%, Shorty grew 2%, their total height increased by 4%, and their height difference increased by X%. Compute the value of X.",
    answer: 8
  },
  {
    question: "Today Alice ate 3 fewer candies than yesterday, and twice as many cookies as yesterday. But the total number of candies and cookies she ate today was the same as yesterday. How many cookies did Alice eat today?",
    answer: 6
  },
  {
    question: "A ring is a flat shape formed by an inner circle and an outer circle, as shown in the first diagram. How many rings of all sizes and types are there in the second diagram containing five circles?",
    answer: 10
  },
  {
    question: "John took two different digits and using them wrote two different 2-digit numbers (each number uses both digits). The sum of these 2-digit numbers is also a 2-digit number. What is the greatest possible value of the smaller of the written numbers?",
    answer: 45
  },
  {
    question: "A metal letter R weighs 2 pounds, a metal letter S weighs 1 pound, and a metal letter M weighs 4 pounds. A certain 10-letter \"word\" containing only the metal letters R, S, and M can be split into three groups of letters weighing 9 pounds per group. How many letters M are in this word?",
    answer: "4, 5"
  },
  {
    question: "In a very long toy train, the first and last cars were blue. After each blue car (except the last one), there were two yellow cars. After each pair of yellow cars, there was a red car. After each red car, there was a blue car. The first five train cars are shown in the picture. Oleg picked a car and recolored all cars in front of it green. Then Joyce picked a car and recolored all cars behind it green. What is the greatest possible number of non-green cars in the recolored toy train if it contains 7 more yellow cars than blue cars?",
    answer: 34
  },
  {
    question: "Find the largest 6-digit multiple of 11 such that the sum of all its digits equals 40. 5-6",
    answer: 999922
  },
  {
    question: "The Treasury wants to reduce usage of coins and is considering several silly proposals: devalue a quarter by X% compared to a penny, raise a dollar by X% compared to a penny, and make a dollar worth 6 quarters. If it decides to implement all three proposals, without any other explicit changes (so a penny is still worth 1 cent, and a dime is still worth 10 cents), how many dimes would be in a dollar?",
    answer: 12
  },
  {
    question: "Anna really likes numbers and decided to collect them. She started her collection from the number 1001, which was a birthday gift from more new number to the collection by selecting the smallest counting number not yet in the collection that was relatively prime to all the numbers already in the collection. What number was added to Anna's collection on week 10? Note that after 10 weeks the collection contained 11 different numbers.",
    answer: 37
  },
  {
    question: "How many different ways are there to place six different digits from 1 to 6 inside the six square cells of a 2-by-3 grid (one digit per cell) such that for every pair of consecutive digits (such as 3 and 4) their square cells share a side?",
    answer: 16
  },
  {
    question: "All possible diagonals drawn from the two adjacent vertices A and B of a regular hectogon divide the hectogon's interior into a number of non-overlapping shapes - triangles and quadrilaterals (without any part of a line inside them). How many of these shapes are triangles? (A hectogon is a polygon with 100 sides.)",
    answer: 292
  },
  {
    question: "There are eight different cards (four red and four blue) with the digits 2, 0, 1, 7 on them. Each card has exactly one digit, and each of these digits is on exactly two cards (one red and one blue). How many different ways are there to put all eight cards in a row with digits face up and right-side up such that every card appears right next to another card with the same digit?",
    answer: 384
  },
  {
    question: "A teacher asked her students to find a 2-digit whole number which has as many as possible different positive factors. Jen realized that there was more than one such number, and listed each of them once. Find the sum of all of Jen's numbers.",
    answer: 402
  },
  {
    question: "Jane's mother left some cherries for her children. Jane ate 10 cherries, which was exactly 25 of all the cherries that her mother left. Her brother Sam ate all the remaining cherries. How many cherries did he eat?",
    answer: 15
  },
  {
    question: "From a big piece of paper Steve cut out 2016 shapes - squares and regular pentagons. Then Michael cut each pentagon along one of its diagonals. How many quadrilaterals were there at the end? (A regular pentagon has five equal sides and five equal angles. A diagonal of a pentagon is a segment which connects two corners that are not already connected by a side.)",
    answer: 2016
  },
  {
    question: "There are 30 puppies, kittens, and mice altogether in the Pet Hotel. There are twice as many kittens' ears as puppies' tails. There are twice as many puppies' paws as mice's eyes. How many kittens are there in the l number of body parts)?",
    answer: 10
  },
  {
    question: "The diagram shows a 4-by-7 rectangle composed of unit squares, where parts of some lines have been erased. How many squares of all sizes and positions are there in this diagram, including squares that are made up of other squares?",
    answer: 34
  },
  {
    question: "Stan bought several pizza pies. He cut the first pie into 2 slices, the second pie into 3 slices, the third pie into 4 slices, and so forth. Then he ate one slice from each pie and counted that only 21 slices were left. How many slices did Stan eat?",
    answer: 6
  },
  {
    question: "The ose, which blooms every 12 years; the Seldom Sunflower, which blooms every 7 years; and the Miracle Magnolia, which blooms every 50 years. If all three plants bloom in 2016, in what year will all three of them bloom again the next time? 5-6",
    answer: 4116
  },
  {
    question: "In 1st grade Bob and Pete were the same height. By 6th grade, Bob grew 20% whereas Pete grew 20 cm. By 11th grade, compared with 6th grade, Pete grew 20% whereas Bob grew 20 cm. By how many centimeters is Pete taller than Bob in 11th grade?",
    answer: 4
  },
  {
    question: "On Monday, Matthew folded a paper rectangle once to get another rectangle. On Tuesday, he folded this new rectangle once to get another rectangle. Mattew continued to do so daily until he got (after the fifth folding) a 2 cm-by-3 cm rectangle on Friday. What is the greatest possible perimeter (in centimeters) of the original rectangle?",
    answer: 196
  },
  {
    question: "There are four pens (black, blue, red, and green) and four pen caps (blue, blue, red, and green). How many ways are there to put all four caps on all four pens (exactly one cap per pen) with the restriction that pen's and cap's colors should be different for each pen? Note that the two blue caps are identical.",
    answer: 4
  },
  {
    question: "Ravi wrote (using white chalk) the number 123,456,789 on the board. Then he wrote (using yellow chalk) the number 20 near every white odd digit on the board, and the number 16 near every white even digit on the board. Then he wrote (using pink chalk) the number 20 near every non-pink odd digit on the board, and the number 16 near every non-pink even digit on the board. Finally, he wrote (using grey chalk) the number 20 near every non-grey odd digit on the board, and the number 16 near every non-grey even digit on the board. How many even digits are on the board now?",
    answer: 162
  },
  {
    question: "Ben thought of four different positive numbers. Exactly two of his numbers are multiples of 2, exactly two of his numbers are multiples of 3, and exactly two of his numbers are multiples of 5. What is the least possible value of the sum of the four numbers Ben thought of?",
    answer: 24
  },
  {
    question: "Say that a pair of numbers X and Y (X may equal Y) is \"special\" if their sum and their product have the same units digit. How many different special pairs of two-digit whole numbers are there? Count pairs (X, Y) and (Y, X) as one pair.",
    answer: 171
  },
  {
    question: "Emily has four cards marked 2, 0, 1, and 9. What is the smallest four digit number that Emily can make with her cards? (2 3",
    answer: "1029, 1026"
  },
  {
    question: "Calculate: 5 5 − 5 ÷ 5 ) 4",
    answer: 6
  },
  {
    question: "Mary cut a rectangular piece of paper into two triangles with sides 9, 40, and 41 cm. Find the area of the rectangular piece of paper before cutting. 1 1 1",
    answer: 360
  },
  {
    question: "Find the value of x , if 2 x + 5 2 = 14 2",
    answer: 18
  },
  {
    question: "Adam the Ant and Anna the Ant dared each other to grab a moving bicycle wheel. Adam the Ant hung on for 20 seconds, in which time the wheel made 30 turns; then, he fell off. Anna the Ant hung on 12 seconds longer than Adam the Ant. How many times did she spin around on the bicycle wheel?",
    answer: 48
  },
  {
    question: "Find the covered number:",
    answer: "2038, 2038"
  },
  {
    question: "Fifteen elves made some identical cakes for a party. Each elf ate half of a cake, one-fifth of a cake, and a third piece, which was six times smaller than the second piece. Three cakes were left untouched. How many cakes did the elves make?",
    answer: 14
  },
  {
    question: "One chocolate bar can be used to create one chocolate rabbit with some chocolate left over. The leftovers of seven bars can be used to create two chocolate rabbits without any chocolate left over. How many chocolate rabbits can be created from 35 chocolate bars?",
    answer: 45
  },
  {
    question: "All cabins on the Giant Ferris Wheel are numbered in order starting from the number 1. Jack came and sat in cabin 48. Jim skipped the next 15 cabins and sat in cabin 2. How many cabins are there?",
    answer: 62
  },
  {
    question: "Mother Goose's twin sons, Winken and Blinken, were born on the same day of the year as their mom. Two years ago, the sum of all their ages was 19. Today, Mother Goose is 3 times as old as Winken. How old is Blinken today?",
    answer: 5
  },
  {
    question: "Alice used 9 cm × 9 cm × 9 cm cubes to build a tower which is 12 cubes tall, 4 cubes wide and 3 cubes long. Then, she decided to make her tower taller by taking apart one of the side layers to build a few more layers on the top of the tower. What is the smallest possible height, in centimeters, of the new tower?",
    answer: 144
  },
  {
    question: "All the unicorns on Rainbow Island are either green or yellow. Every time the clock strikes midnight, some of the unicorns change their color. Yesterday, there were 6 green unicorns for every 5 yellow ones. Today, there are 3 green ones for every 4 yellow ones. What is the smallest possible number of unicorns living on Rainbow Island?",
    answer: 77
  },
  {
    question: "As a present for Mother's Day, Mary wants to decorate a 1-inch-wide frame around a 6-inch by 9-inch photo of her mom. Mary paints each square inch with alternating striped and solid triangles, as shown. How many striped triangles will Mary paint?",
    answer: 68
  },
  {
    question: "The Ancient Wizard Albus owns 3 ancient Clocks of Perpetual Motion. Every day, Clock #1 runs 20 minutes fast; Clock #2 runs 30 minutes fast, and Clock #3 runs 40 minutes fast. He sets all three clocks to the correct time and leaves to visit his friend. After many days, he returns home and, to his surprise, finds all 3 clocks showing the correct time again! What is the fewest possible number of days Albus could have spent away from home?",
    answer: 72
  },
  {
    question: "Rachel has four cards marked 2, 0, 1, and 8. What is the greatest four digit number that Rachel can make with her cards?",
    answer: 8210
  },
  {
    question: "Find the value of x, if :",
    answer: 8
  },
  {
    question: "How long is the rectangle if its width is 6 inches and its area is 42 square inches?",
    answer: 7
  },
  {
    question: "A very hungry hippo can eat 25 kilograms of grass in 50 minutes. How many minutes will it take the hippo to eat 60 kilograms of grass?",
    answer: 120
  },
  {
    question: "Emily is playing a game where she receives 2 points as soon as she solves three puzzles correctly. For every ten correctly solved puzzles, Emily earns 3 additional points. How many points did Emily receive if she solved 30 puzzles in all?",
    answer: 29
  },
  {
    question: "There were 16 more frogs in Green Pond than in Blue Pond. All the frogs from Blue Pond jumped into Green Pond. Now the total number of frogs in Green Pond is 80. How many frogs were there originally in Green Pond?",
    answer: 48
  },
  {
    question: "Find the missing number:",
    answer: 1817
  },
  {
    question: "An alarm clock is slow. It falls behind 4 minutes every 24 hours. If the clock was showing the correct time at 6 : 00 this morning, how many seconds ahead was the clock at 10 : 00 last night?",
    answer: 80
  },
  {
    question: "Twenty comic book fans started a club. The next day and every day after that, three new members joined the fan club. On November 30th, the club had 71 members at the end of the day. On what date in November was the fan club formed?",
    answer: 13
  },
  {
    question: "Aladdin found a cave filled with boxes of gold, measuring 2 inches × 2 inches × 2 inches, and boxes of silver, measuring 1 inch × 1 inch × 1 inch. However, Aladdin brought only one box measuring 6 inches × 6 inches × 7 inches with him. He filled it with as many boxes of gold as would fit, then put as many boxes of silver as would fit in the remaining space. How many boxes of treasure did Aladdin take?",
    answer: 63
  },
  {
    question: "Sheila collects Pokemon cards. As of 2018, she has a Mewtwo card that is twice as old as her Snorlax card. Two years ago, her rare Raichu card was five times as old as the Snorlax card. If the Raichu card is seven years older than the Mewtwo card, in what year was the Raichu card made?",
    answer: 2001
  },
  {
    question: "A cabinet has two sliding doors of different sizes. When the cabinet is fully closed, they overlap by two-fifths of the width of the smaller door. When both doors are slid to one side, the part of the longer door that is not behind the shorter one is half as wide as the original overlap, and the open portion of the cabinet is 36 inches wide. What is the width of the whole cabinet?",
    answer: 108
  },
  {
    question: "Queen Laetitia is sorting her gem collection. She starts by placing some of her diamonds into two boxes. In every box after the first two, the Queen puts as many diamonds as in the previous two boxes combined. If there are 30 diamonds in the fourth box, and 128 diamonds in the seventh box, how many diamonds did Queen Laetitia place in the tenth box?",
    answer: 542
  },
  {
    question: "A cat and dog sing a song. The dog sings \"Woof!\" five times for every two times the cat sings \"Meow!\" If the cat sings \"Meow!\" 28 times, how many times did the dog sing \"Woof!\"?",
    answer: 70
  },
  {
    question: "Harry and Luna together ate 56 Chocolate Frogs. Harry ate 6 more Chocolate Frogs than Luna. How many Chocolate Frogs did Luna eat? 1",
    answer: 25
  },
  {
    question: "Find the value of x, if x − 10 = 5 5",
    answer: 75
  },
  {
    question: "A boy has 140 toy soldiers. He put 14 soldiers in the fortress and divided the rest of the soldiers into 14 equal groups. If he used 3 of the groups as attackers, how many toy soldiers are attackers?",
    answer: 27
  },
  {
    question: "Five years ago, David was three times as old as Julia was. In 2 years, David will be twice as old as Julia will be. How old is David now?",
    answer: 26
  },
  {
    question: "Mandy arranged 1 ft × 1 ft ×1 ft boxes in a stack that is 5 ft × 5 ft × 5 ft. Andy took all the boxes from the top layer of the stack. Then, Sandy took all the boxes from the rightmost side of the remaining stack. How many boxes are left in the stack?",
    answer: 80
  },
  {
    question: "Hogwarts students stand in a row. Harry noted that 22 students are to his left side. Hermione noted that 11 students, including Harry, are to her right side. How many students are between Harry and Hermione if there are 27 students in the row?",
    answer: 6
  },
  {
    question: "How many 2 × 4 LEGO bricks do you need to cover two 14 × 16 LEGO building plates? 3 1",
    answer: 56
  },
  {
    question: "Tom Sawyer painted of a fence with of a canister of paint. How many 5 3 milliliters of this paint did he use to paint the whole fence, if the canister contains 990 milliliters of paint?",
    answer: 550
  },
  {
    question: "Two faulty tennis ball machines start to shoot balls from opposite sides of a 25 meter by 10 meter tennis court. The green ball machine shoots green balls that stop on the court 5 meters to 20 meters from the green machine's side. The yellow ball machine shoots yellow balls that stop on the court 2 meters to 16 meters from the yellow machine's side. Find the area of the tennis court that has balls of either color on it.",
    answer: 110
  },
  {
    question: "Two brothers, Jim and John, had a straight log in their backyard. Jim wanted the log cut into 24 equal parts. He painted red lines on the log and called to a lumberjack to cut the log by the painted lines. John wanted the log cut too, but into 18 equal parts. He painted yellow lines on the log with some yellow lines painted over red lines. The lumberjack came and cut the log by the painted lines. How many cuts did the lumberjack make?",
    answer: 35
  },
  {
    question: "A young wizard knows this many spells: 60 ÷ 2 × 10. An old wizard knows twice as many. How many spells does the old wizard know?",
    answer: 600
  },
  {
    question: "A snail can crawl 12 inches in 3 hours. How many inches can it crawl in 5 hours?",
    answer: 20
  },
  {
    question: "If the sum of two numbers is 46 and the difference is 10, what is the larger number?",
    answer: 28
  },
  {
    question: "Find the value of x, if: 3x − 23 = 10",
    answer: 11
  },
  {
    question: "Sina trained for the RSM Olympiad. On the first day of her training she solved 20 problems. Each day she solved one more problem than the day before. On her last day of training she solved 80 problems. How many days did Sina train for the Olympiad?",
    answer: 61
  },
  {
    question: "We have so much chocolate prepared for the party that we had to put it all in boxes and arrange the boxes in this pile, which is 4 boxes high, 5 boxes wide, and 5 boxes long: Soon we saw that some boxes of chocolate were missing−someone just loved our chocolate! How many boxes of chocolate do we have now?",
    answer: 92
  },
  {
    question: "Find the missing number: 2016 · 199 = 2016·? +2016 · 98",
    answer: 101
  },
  {
    question: "Jackie is 8 years older than Mona. If 9 years ago she was three times as old as Mona was, how old is Jackie now?",
    answer: 21
  },
  {
    question: "Kate's math team meets every 3rd day. For example, they met on Monday, January 4th. Next time, they met on Thursday, January 7th. After that, they met on Sunday, January 10th. When in January did they again meet on Monday?",
    answer: 25
  },
  {
    question: "How many square tiles with sides of length 2 feet does one need to cover the floor of a room 30 feet long and 20 feet wide?",
    answer: 150
  },
  {
    question: "If Sammy eats 6/7 of a pizza in 2/21 of an hour, how many pizzas will he eat in one hour?",
    answer: 9
  },
  {
    question: "A Magic Carpet is 12 feet long and 10 feet wide. However, only the purple part of the Magic Carpet has magic power. If the magic part is 2 feet wide, find the area of the magic part of the Magic Carpet.",
    answer: 72
  },
  {
    question: "Once upon a time, on an island in the middle of an ocean, several tribes lived and fought with each other. A time came when all the tribes agreed to everlasting peace. So, they decided to build a giant monument to celebrate this Peace Treaty. The monument required a certain number of logs, and the tribes had to agree on the number of logs that each tribe was to provide. Had there been two fewer tribes on the island, this number of logs would have been 6. Had there been one more tribe on the island, this number would have been 5. Unfortunately, the tribes could not agree on what number of logs would be fair for the actual number of tribes. So the tribes announced an eternal war - and were not heard from ever again. How many tribes were on the island?",
    answer: 17
  },
  {
    question: "What is the smallest number can you get when you subtract a one-digit number from 50 and then double the result? x−3 18",
    answer: 82
  },
  {
    question: "Find x , if 15 = 5",
    answer: 57
  },
  {
    question: "In the film, Zeke the Zombie Slayer Versus the Zombies from Space, Zeke slayed 140 zombies. In the sequel, Zeke the Zombie Slayer Versus the Zombies from Space, Part 2, he slayed 5% more zombies. How many zombies were slain by Zeke in the sequel?",
    answer: 147
  },
  {
    question: "Adam the Ant and Anna the Ant dared each other to grab a moving bicycle wheel. Adam the Ant hung on for 20 seconds, in which time the wheel made 30 turns; then, he fell off. Anna the Ant hung on 12 seconds longer than Adam the Ant. How many times did she spin around on the bicycle wheel? 2",
    answer: 48
  },
  {
    question: "Calculate: 49 − 3 · ( − 3)3",
    answer: 67
  },
  {
    question: "Chelsea is a chess champion. She's played 132 games; her ratio of wins to draws to losses is 6 : 3 : 2. How many games has she won?",
    answer: 72
  },
  {
    question: "Ben, Fran and Stan are posting funny memes online. Ben's funny memes got 40% more likes than Stan's. Fran's got 20% fewer likes than Stan's. By what percentage did Ben get more likes than Fran? 2",
    answer: 75
  },
  {
    question: "Any time Speedy the Sloth is not sleeping, she drinks chamomile tea at a steady rate of 7 of a 17 cup per hour. Yesterday, she drank 1 cup. If today she drank 42 of a cup more than yesterday, how long (in minutes) did she stay awake today?",
    answer: 295
  },
  {
    question: "If you double all edges of a cube, by what percent will the volume of this cube increase?",
    answer: 700
  },
  {
    question: "AB ∥ DE ¯ ¯ , C is the point of intersection of AE ¯ and DB . m ∠1 = 80°, m ∠2 : m ∠3 = 2 : 3. Find m ∠2.",
    answer: 104
  },
  {
    question: "What is the largest three-digit palindrome divisible by 18? (A palindrome is an integer that remains the same when its digits are reversed. For example, 77, 151, 8338, and etc .)",
    answer: 828
  },
  {
    question: "Six of King Arthur's knights are sitting around the Round Table eating peanuts. Since each knight suspected the others of not sharing fairly, each one secretly counted his two neighbors' peanuts and summed them up, with the following results (in order): 20, 28, 36, 44, 52, 60. How many peanuts does the knight who counted 52 have?",
    answer: 38
  },
  {
    question: "Find x, if: [figure in source PDF]",
    answer: 42
  },
  {
    question: "Tom is 40 inches tall. The sign next to the Superman Roller Coaster says: \"You must be 48 inches to ride!\". By what percent does Tom have to grow to be able to ride the roller coaster?",
    answer: 20
  },
  {
    question: "The top of a square table is covered with four equal square tiles. If the side length of each tile is decreased by 50%, how many tiles of the new size would be needed to cover the same table?",
    answer: 16
  },
  {
    question: "Before hosting their annual Chess Tournament and Spelling Bee, a school received 7 boxes of honorary medals: one medal for every participant. After the Chess Tournament, two boxes were empty and the rest were still closed. After the Spelling Bee, which had twice as many participants, there were 72 medals left. How many people competed in the Chess Tournament?",
    answer: 144
  },
  {
    question: "Dana sent her mom 60 texts in July, which is 60% fewer texts than her mom sent Dana that month. How many total texts did they exchange in July?",
    answer: 210
  },
  {
    question: "A witch made two bowls of potion. The first bowl contains 28.5 ounces of potion, and the second bowl contains 3 ounces of potion. She poured ¾ ounces from the second bowl into the first one. How many times as much potion is in the first bowl as in the second",
    answer: 13
  },
  {
    question: "The measures of the angles of a triangle are in the ratio 2 : 3 : 4. The simplified ratio of the measures of the exterior angles of the triangle is a : b : c. Find a + b + c.",
    answer: 18
  },
  {
    question: "Mia and Luke made 85 origami together. Mia made 4 pieces of origami every 3 minutes. Luke made 3 pieces of origami every 4 minutes, but Luke spent 5 minutes more than Mia. How many pieces of origami did Mia make?",
    answer: 52
  },
  {
    question: "The Charleston family has less than 500 Dalmatians. There are six times as many Dalmatians with black spots on their right ears as Dalmatians without these spots. After giving away 6% of their Dalmatians, how many do the Charlestons have left?",
    answer: 329
  },
  {
    question: "A blogger who is just starting out made three videos. So far, she has 312 subscribers, who watched one, two, or all three videos. The three videos got 740 total views all together. Assuming each subscriber only viewed a particular video once, how many more people watched all three videos than only one video?",
    answer: 116
  },
  {
    question: "The measures of the acute angles of a right triangle are in the ratio 1 : 5. Find the measure of the larger acute angle of the triangle.",
    answer: 75
  },
  {
    question: "This year, Slytherin got 5% less House points than the winner Gryffindor. What is the minimum number of House points Slytherin needed more to win if Gryffindor got 420 House points? 3",
    answer: 22
  },
  {
    question: "Calculate: 81 − · ( − 2)4 4",
    answer: 69
  },
  {
    question: "A grasshopper makes 6 jumps per 15 seconds. Each jump covers 2 inches. After 40 seconds of straight-forward jumping, the grasshopper stopped. How far (in inches) did the grasshopper jump? 8",
    answer: 32
  },
  {
    question: "How many times larger than the number (1 − ) is the number 15 2 (1.2 + )? 3",
    answer: 4
  },
  {
    question: "Ron made a mistake casting a spell, and 25 frogs start to appear each second in the classroom. After 10 seconds, Hermione cast another spell, and 35 frogs start to disappear as 25 frogs appear each second. For how many seconds was there at least one frog in the classroom?",
    answer: 35
  },
  {
    question: "John beat his previous high score in the Favorite game by 28%. If his new high score is 288 points, what was his previous high score?",
    answer: 225
  },
  {
    question: "If you increase the length of the rectangle by 50% and the width of the rectangle by 100%, by what percent will the area of this rectangle increase? 0.1 1",
    answer: 200
  },
  {
    question: "Find x, if =− 0.06−0.03𝑥 6",
    answer: 22
  },
  {
    question: "A rectangular playing field that is 20 meters long and 15 meters wide was cleaned by 22 boys and 18 girls. The field was divided into equal parts for each child. What area of the field was cleaned by boys?",
    answer: 165
  },
  {
    question: "Mary went up the Old Tower taking 3 steps per second. Then she carefully came down from the tower taking 2 steps per second. It took Mary 25 seconds longer to come down than to go up. How many steps does the Old Tower have?",
    answer: 150
  },
  {
    question: "This year, the Start-of-Term feast had three desserts: chocolate eclairs, raspberry tarts, and jam doughnuts. On the dessert table, there were two doughnuts for every three eclairs, and six eclairs for every five tarts. How many tarts were on the dessert table if there were a total of 1320 desserts? 1",
    answer: 440
  },
  {
    question: "A man took a trip, traveling by train. He looked out the window during the first 3 1 of the trip. He then slept for 5 of the remaining distance. When he woke up, he 1 read a book for 2 of the remaining distance. If the train traveled 17.6 km more while he read than while he slept, how many kilometers did the train travel?",
    answer: 132
  },
  {
    question: "The measures of the angles of a triangle are in the ratio 3 : 4 : 5. What is the measure of the largest angle of this triangle?",
    answer: 75
  },
  {
    question: "Harry wants to buy a new magic wand that costs 40 coins. How many coins will Harry save if he buys this wand when it is on sale at 10% off?",
    answer: 4
  },
  {
    question: "Jeremy makes $300 in 35 days. If he is paid the same amount every day, how much money will he make in 42 days?",
    answer: 360
  },
  {
    question: "A certain number of special spells must be cast to protect the secret hiding place of the Order of the Phoenix. Each member of the Order is capable of casting the same number of these spells per hour. If two wizards were to join the Order, casting the protection spells can be completed in three hours instead of four hours. How many wizards are in the Order?",
    answer: 6
  },
  {
    question: "While on a journey to find giants, Hagrid lost 64% of his weight. If he now weighs 2016 lb, what did he weigh before the journey?",
    answer: 5600
  },
  {
    question: "If you double all the sides of a square, by what percent will the area of this square increase?",
    answer: 300
  },
  {
    question: "Together, Hermione and Luna bought 2016 Chocolate Frogs for Harry. If Hermione paid 98 coins and Luna paid 28 coins, for how many Chocolate Frogs did Hermione pay?",
    answer: 1568
  },
  {
    question: "Andrew is about to leave for school. If he walks at a speed of 50 meters per minute, he will arrive 3 minutes after the bell rings. If he runs at a speed of 80 meters per minute, he will arrive 3 minutes before the bell rings. In how many minutes will the bell ring?",
    answer: 13
  },
  {
    question: "A rope that is 245 cm long is cut into three pieces. The ratio of the lengths of the first piece to the second piece is 2 : 3, and the ratio of the lengths of the second piece to the third piece is 4 : 5. What is the length of the longest of the three pieces?",
    answer: 105
  },
  {
    question: "Rory's number is 0.3 larger than Lori's number, and the sum of their numbers is",
    answer: 336
  }
];
