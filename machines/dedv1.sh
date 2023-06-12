if [ $1 = "start" ]; then
	if [ $2 = "java" ]; then
		sshpass -p '19003258aA' ssh root@172.104.32.121 -o StrictHostKeyChecking=no "java -Dperdelay=5000 -Ddelay=1 -Drmnwp=false -jar FLEXBOT.jar $3 $4 $5 60 $6 $7"
	elif [ $2 = "sms" ]; then
		sshpass -p '19003258aA' ssh root@172.104.32.121 -o StrictHostKeyChecking=no "screen -d -m timeout 60 python3 spam.py $3 100"
  elif [ $2 = "proxies" ]; then
		sshpass -p '19003258aA' ssh root@172.104.32.121 -o StrictHostKeyChecking=no "python3 main.py"
	fi
elif [ $1 = "stop" ]; then
	sshpass -p '19003258aA' ssh root@172.104.32.121 -o StrictHostKeyChecking=no "pkill java && pkill python"
fi