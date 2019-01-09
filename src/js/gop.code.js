const topic1 = [
    [["KEY", "_class"], ["VAL", "bot"], ["BOT", "Bot1"]],
    [["KEY", "_htmlprefix"], ["VAL", "b1"]],
    [["KEY", "box"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "No, there is not"]],
    [["KEY", "tubs"], ["VAL", 1], ["TYPE", "INT"], ["ONASK", "Of course there is, the product is called 'petit filous tubs'"]],
    [["KEY", "food coloring"], ["VAL", "Maybe"], ["TYPE", "STR"]],
    [["KEY", "pirate"], ["VAL", "No, why would there be a pirate ?"], ["TYPE", "STR"]],
    [["KEY", "eco"], ["VAL", "Maybe"], ["TYPE", "STR"]],
    [["KEY", "star"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It shines brightly !!"]],
    [["KEY", "strawberries"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes, i love strawberries"]],
    [["KEY", "raspberries"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "No, i hate raspberries"]],
    [["KEY", "peaches"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "No, i hate peaches"]],
    [["KEY", "purple"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Who would use such a color ?"]],
    [["KEY", "blue"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Who would use such a color ?"]],
    [["KEY", "milk"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "No, i'm made of milk but i don't like it"]],
    [["KEY", "fridge"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "I taste so good that you'll eat me before that"]],
    [["KEY", "color"], ["VAL", "red sir"], ["TYPE", "STR"]],
    [["KEY", "background"], ["VAL", "white"], ["TYPE", "STR"]],
];

var Bot1 = new BOT_makeBot("Bot1", "topic1");
BOT_theBotId = "Bot1";
BOT_theTopicId = "topic1";