var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();

var bot = new builder.UniversalBot(connector, function(session) {
    session.send("You said: %s", session.message.text);
});

bot.recognizer(new builder.RegExpRecognizer( "Find", { en_us: /^(find|search)/i }));

bot.on('conversationUpdate', function (message) {
    session.send("Conversation updated");
});

bot.dialog('findDialog', function (session) {
    session.endDialog("What would you like to search for?");
}).triggerAction({ matches: 'Find' });