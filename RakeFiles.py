#!/usr/bin/env python
import os;
import json;
basepath = './assets'
resourcePath ='./src/resources.js'
resType = ['.json','.png','.fnt','.jpg','.plist']
resDict = {}
def addFile(d,p):
	print 'addFile',p
	n = os.path.split(p)
	t = os.path.splitext(n[1])
	l = n[1].split('.');
	name = l[1]+'_'+l[0].replace('-','_')
	for x in resType:
		if t[1] ==x:
			resDict[name]=os.path.join(d, n[1])


def getResFromPath(d,p):
	if p =='':
		return []
	a = os.listdir(p)
	for x in a:
		curfile = os.path.join(p, x)
        	if 	os.path.isdir(curfile):
         		getResFromPath(os.path.join(d, x),curfile)
        	else:
				addFile(d,curfile)

def getPathFiles():
	getResFromPath('',basepath)
	s =json.dumps(resDict)
	f = open(resourcePath, 'w')
	f.write('const res ='+s)
	f.write('\r\n export default res')
 	f.close();

getPathFiles()