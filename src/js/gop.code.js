function onWin()
{
    alert("Yeah, you guessed well. Congratulations");
    location.reload();
}

function onLose()
{
    alert("No, that's not it. You'll do better next time");
    location.reload();
}

const topic1 = [
    [["KEY", "_class"], ["VAL", "bot"], ["BOT", "johnBot"]],
    [["KEY", "_htmlprefix"], ["VAL", "john"]],
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
    [["KEY", "french"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "100% french"]],
    [["KEY", "fridge"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "I taste so good that you'll eat me before that"]],
    [["KEY", "color"], ["VAL", "red sir"], ["TYPE", "STR"]],
    [["KEY", "background"], ["VAL", "white"], ["TYPE", "STR"]],
    [["KEY", "blinky"], ["ONASK", onWin], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "inky"], ["ONASK", onLose], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "pinky"], ["ONASK", onLose], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "sue"], ["ONASK", onLose], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "promotion"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "No, there is not"]],
    [["KEY", "fabulous"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Of course, I am"]],
    [["KEY", "opened"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "What ? No !"]],
    [["KEY", "alone"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Sadly, there is not much tub's around me ... EAT ME !"]],
];

const topic2 = [
    [["KEY", "_class"], ["VAL", "bot"], ["BOT", "johnBot"]],
    [["KEY", "_htmlprefix"], ["VAL", "john"]],
    [["KEY", "box"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes, there is a box"]],
    [["KEY", "tubs"], ["VAL", 1], ["TYPE", "INT"], ["ONASK", "Of course there is, the product is called 'petit filous tubs'"]],
    [["KEY", "food coloring"], ["VAL", "Maybe"], ["TYPE", "STR"]],
    [["KEY", "pirate"], ["VAL", "No, why would there be a pirate ?"], ["TYPE", "STR"]],
    [["KEY", "eco"], ["VAL", "No one that i know"], ["TYPE", "STR"]],
    [["KEY", "star"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "No, i guess it is a cloudy night"]],
    [["KEY", "strawberries"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "raspberries"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "peaches"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "purple"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes, it is beautiful isn't it ? ?"]],
    [["KEY", "blue"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Who would use such a color ?"]],
    [["KEY", "milk"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes Yes"]],
    [["KEY", "french"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "100% french"]],
    [["KEY", "fridge"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes, but you'll eat me before that anyway"]],
    [["KEY", "color"], ["VAL", "red sir"], ["TYPE", "STR"]],
    [["KEY", "background"], ["VAL", "purple"], ["TYPE", "STR"]],
    [["KEY", "blinky"], ["ONASK", onLose], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "inky"], ["ONASK", onWin], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "pinky"], ["ONASK", onLose], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "sue"], ["ONASK", onLose], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "promotion"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "No, there is not"]],
    [["KEY", "fabulous"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Of course, I am"]],
    [["KEY", "opened"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "What ? Oh yes ... I'M HAPPY !"]],
    [["KEY", "alone"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "No I'm not ! But he is well hidden ..."]],
    [["KEY", "sing"], ["VAL", "We're Tub's, we're not pots and we have everything you need. Fruit. Fruit. Fresh cheese.  Fresh cheese. Little Tub's scoundrels, but what's in that tub? FRUIT AND FRESH CHEESE, BOSS!"], ["TYPE", "STR"]],
];

const topic3 = [
    [["KEY", "_class"], ["VAL", "bot"], ["BOT", "johnBot"]],
    [["KEY", "_htmlprefix"], ["VAL", "john"]],
    [["KEY", "box"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes, there is a box"]],
    [["KEY", "tubs"], ["VAL", 1], ["TYPE", "INT"], ["ONASK", "Of course there is, the product is called 'petit filous tubs'"]],
    [["KEY", "food coloring"], ["VAL", "No, we don't use that shit"], ["TYPE", "STR"]],
    [["KEY", "pirate"], ["VAL", "Hell yeah"], ["TYPE", "STR"]],
    [["KEY", "eco"], ["VAL", "No one that i know"], ["TYPE", "STR"]],
    [["KEY", "star"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes"]],
    [["KEY", "strawberries"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "raspberries"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "peaches"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "purple"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Who would use such a color ?"]],
    [["KEY", "blue"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes, it is beautiful isn't it ? ?"]],
    [["KEY", "milk"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Of course, i love milk"]],
    [["KEY", "french"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Well seen, it is not"]],
    [["KEY", "fridge"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "i taste so good that you'll eat me before that"]],
    [["KEY", "color"], ["VAL", "Red, pink and orange, beautiful isn't it ?"], ["TYPE", "STR"]],
    [["KEY", "background"], ["VAL", "Blue"], ["TYPE", "STR"]],
    [["KEY", "blinky"], ["ONASK", onLose], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "inky"], ["ONASK", onLose], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "pinky"], ["ONASK", onWin], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "sue"], ["ONASK", onLose], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "promotion"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "No, there is not"]],
    [["KEY", "fabulous"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Of course, I am"]],
    [["KEY", "opened"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "What ? No !"]],
    [["KEY", "alone"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Join the party !"]],
    [["KEY", "sing"], ["VAL", "We're Tub's, we're not pots and we have everything you need. Fruit. Fruit. Fresh cheese.  Fresh cheese. Little Tub's scoundrels, but what's in that tub? FRUIT AND FRESH CHEESE, BOSS!"], ["TYPE", "STR"]],
];

const topic4 = [
    [["KEY", "_class"], ["VAL", "bot"], ["BOT", "johnBot"]],
    [["KEY", "_htmlprefix"], ["VAL", "john"]],
    [["KEY", "box"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes, there is a box"]],
    [["KEY", "tubs"], ["VAL", 1], ["TYPE", "INT"], ["ONASK", "Of course there is, the product is called 'petit filous tubs'"]],
    [["KEY", "food coloring"], ["VAL", "No, we don't use that shit"], ["TYPE", "STR"]],
    [["KEY", "pirate"], ["VAL", "Hell yeah"], ["TYPE", "STR"]],
    [["KEY", "eco"], ["VAL", "Of course"], ["TYPE", "STR"]],
    [["KEY", "star"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes"]],
    [["KEY", "strawberries"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "raspberries"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "peaches"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "purple"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Who would use such a color ?"]],
    [["KEY", "blue"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes, it is beautiful isn't it ? ?"]],
    [["KEY", "milk"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Of course, i love milk"]],
    [["KEY", "french"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Well seen, it is not"]],
    [["KEY", "fridge"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "i taste so good that you'll eat me before that"]],
    [["KEY", "color"], ["VAL", "Red, pink and orange, beautiful isn't it ?"], ["TYPE", "STR"]],
    [["KEY", "background"], ["VAL", "Blue"], ["TYPE", "STR"]],
    [["KEY", "blinky"], ["ONASK", onLose], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "inky"], ["ONASK", onLose], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "pinky"], ["ONASK", onLose], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "sue"], ["ONASK", onWin], ["TYPE", "STR"], ["Val", "it's over"]],
    [["KEY", "promotion"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes, there is !"]],
    [["KEY", "fabulous"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Of course, I am"]],
    [["KEY", "opened"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "What ? No !"]],
    [["KEY", "alone"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Join the party !"]],
    [["KEY", "sing"], ["VAL", "We're Tub's, we're not pots and we have everything you need. Fruit. Fruit. Fresh cheese.  Fresh cheese. Little Tub's scoundrels, but what's in that tub? FRUIT AND FRESH CHEESE, BOSS!"], ["TYPE", "STR"]],
];

var Bot1 = new BOT_makeBot("Bot1", "topic1");
BOT_theBotId = "Bot1";
BOT_theTopicId = "topic1";
