/**
 * Describes a message
 * @param source The sender of the message, can be 'player' or 'chatBot'
 * @param content The content
 * @constructor
 */
function Message(source, content)
{
    this.source = source;
    this.content = content;
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
    [["KEY", "fridge"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "I taste so good that you'll eat me before that"]],
    [["KEY", "color"], ["VAL", "red sir"], ["TYPE", "STR"]],
    [["KEY", "background"], ["VAL", "white"], ["TYPE", "STR"]],
];


const topic2 = [
    [["KEY", "_class"], ["VAL", "bot"], ["BOT", "johnBot"]],
    [["KEY", "_htmlprefix"], ["VAL", "john"]],
    [["KEY", "box"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Yes, there is a box"]],
    [["KEY", "tubs"], ["VAL", 1], ["TYPE", "INT"], ["ONASK", "Of course there is, the product is called 'petit filous tubs'"]],
    [["KEY", "food coloring"], ["VAL", "Maybe"], ["TYPE", "STR"]],
    [["KEY", "pirate"], ["VAL", "No, why would there be a pirate ?"], ["TYPE", "STR"]],
    [["KEY", "eco"], ["VAL", "No one that i know"], ["TYPE", "STR"]],
    [["KEY", "star"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "No, i guess it is a cloudy night"]],
    [["KEY", "strawberries"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "raspberries"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "peaches"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "purple"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Yes, it is beautiful isn't it ?"]],
    [["KEY", "blue"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Who would use such a color ?"]],
    [["KEY", "milk"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Yes Yes"]],
    [["KEY", "fridge"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Yes, but you'll eat me before that anyway"]],
    [["KEY", "color"], ["VAL", "red sir"], ["TYPE", "STR"]],
    [["KEY", "background"], ["VAL", "Purple"], ["TYPE", "STR"]],
];

const topic3 = [
    [["KEY", "_class"], ["VAL", "bot"], ["BOT", "johnBot"]],
    [["KEY", "_htmlprefix"], ["VAL", "john"]],
    [["KEY", "box"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Yes, there is a box"]],
    [["KEY", "tubs"], ["VAL", 1], ["TYPE", "INT"], ["ONASK", "Of course there is, the product is called 'petit filous tubs'"]],
    [["KEY", "food coloring"], ["VAL", "No, we don't use that shit"], ["TYPE", "STR"]],
    [["KEY", "pirate"], ["VAL", "Hell yeah"], ["TYPE", "STR"]],
    [["KEY", "eco"], ["VAL", "No one that i know"], ["TYPE", "STR"]],
    [["KEY", "star"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes"]],
    [["KEY", "strawberries"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "raspberries"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "peaches"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "purple"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Who would use such a color ?"]],
    [["KEY", "blue"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Yes, it is beautiful isn't it ? ?"]],
    [["KEY", "milk"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Of course, i love milk"]],
    [["KEY", "fridge"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "i taste so good that you'll eat me before that"]],
    [["KEY", "color"], ["VAL", "Red, pink and orange, beautiful isn't it ?"], ["TYPE", "STR"]],
    [["KEY", "background"], ["VAL", "Blue"], ["TYPE", "STR"]],
];

const topic4 = [
    [["KEY", "_class"], ["VAL", "bot"], ["BOT", "johnBot"]],
    [["KEY", "_htmlprefix"], ["VAL", "john"]],
    [["KEY", "box"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Yes, there is a box"]],
    [["KEY", "tubs"], ["VAL", 1], ["TYPE", "INT"], ["ONASK", "Of course there is, the product is called 'petit filous tubs'"]],
    [["KEY", "food coloring"], ["VAL", "No, we don't use that shit"], ["TYPE", "STR"]],
    [["KEY", "pirate"], ["VAL", "Hell yeah"], ["TYPE", "STR"]],
    [["KEY", "eco"], ["VAL", "Of course !"], ["TYPE", "STR"]],
    [["KEY", "star"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "Yes"]],
    [["KEY", "strawberries"], ["VAL", true], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "raspberries"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "peaches"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "It has to contain some"]],
    [["KEY", "purple"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Who would use such a color ?"]],
    [["KEY", "blue"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Yes, it is beautiful isn't it ? ?"]],
    [["KEY", "milk"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "Of course, i love milk"]],
    [["KEY", "fridge"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "i taste so good that you'll eat me before that"]],
    [["KEY", "color"], ["VAL", "Red, pink and orange, beautiful isn't it ?"], ["TYPE", "STR"]],
    [["KEY", "background"], ["VAL", "Blue"], ["TYPE", "STR"]],
];

const topics = [topic1, topic2, topic3, topic4];

var selectedTopicIndex = Math.floor(topics.length * Math.random());

console.log("selected topic " + (selectedTopicIndex + 1));

const johnTopic = topics[selectedTopicIndex];


johnBot = new BOT_makeBot("johnBot", "johnTopic");

BOT_theBotId = "johnBot";
BOT_theTopicId = "johnTopic";

var controller = function($scope)
{
    $scope.message = "";

    $scope.liteTalkChatBox = document.getElementById("litetalkchatbox");
    $scope.responseArea = document.getElementById("johnballoon");


    $scope.messages = [new Message("chatBot", "Hello, can you guess what picture am i thinking about ?")];


    $scope.playerMessage = function(message)
    {
        $scope.messages.push(new Message("player", message));
        $scope.liteTalkChatBox.value = "ask " + message;
        BOT_chatboxOnSend('litetalkchatbox');
        $scope.messages.push(new Message("chatBot", $scope.responseArea.value));
        $scope.message = "";
    };

};


var application = angular.module("application", []);

application.controller("controller", controller);