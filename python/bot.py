import random
import asyncio
import aiohttp
from discord import Game
from discord.ext.commands import Bot

######TODO######
## --Fix hello function(trying it as a command rather than onmessage)
## --Add a cat bomb feature
## --Add coin flip feature
## --Look into retreiving either gifs or pics
###############

BOT_PREFIX = ("?", "!")
TOKEN = ""

bot = Bot(command_prefix=BOT_PREFIX)

@bot.command
async def hello(context):
	await bot.say('Hello!')

@bot.command(name='ask',
                description="Answers a question.",
                brief="Answers a question",
                aliases=[],
                pass_context=True)
async def ask_kev(context):
    possible_responses = [
        'Thats a no',
        'Probably wont happen',
        'Honestly I dont know',
        'It could happen',
        'Yes, absolutely'
    ]
    await bot.say(random.choice(possible_responses))


@bot.command()
async def square(number):
    squared_value = int(number) * int(number)
    await bot.say(str(number) + " squared is " + str(squared_value))


@bot.event
async def on_ready():
    await bot.change_presence(game=Game(name="with python"))
    print("Logged in as " + bot.user.name)

async def list_servers():
    await bot.wait_until_ready()
    while not bot.is_closed:
        print("Current servers:")
        for server in bot.servers:
            print(server.name)
        await asyncio.sleep(600)


bot.loop.create_task(list_servers())
bot.run(TOKEN)

#			message.content.startswith('!cat'):
#         msg = 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'.format(message)
#         await bot.process_commands(message,msg)