const topic1 = [
    [["KEY", "_class"], ["VAL", "bot"], ["BOT", "Bot1"]],
    [["KEY", "_htmlprefix"], ["VAL", "b1"]],
    [["KEY", "box"], ["VAL", false], ["TYPE", "BOOL"], ["ONASK", "No, there is not"]],
    [["KEY", "tubs"], ["VAL", 1], ["TYPE", "INT"], ["ONASK", "Of course there is, the product is called 'petit filous tubs'"]]
];

var Bot1 = new BOT_makeBot("Bot1", "topic1");
BOT_theBotId = "Bot1";
BOT_theTopicId = "topic1";