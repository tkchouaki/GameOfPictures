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

var controller = function($scope)
{

    $scope.message = "";


    $scope.messages = [new Message("chatBot", "Hello, can you guess what picture am i thinking about ?")];


    $scope.playerMessage = function(message)
    {
        $scope.messages.push(new Message("player", message));

        $scope.message = "";
    }
};


var application = angular.module("application", []);

application.controller("controller", controller);