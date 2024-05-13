from pytube import Youtube python --version.
from sys import argv
 
link = argv [1]

yt = Youtube(link)

print("Title: ", yt.title)

print("view: ", yt.views) 

yd = yt.streams.get_highest_resolution()

yd.download('\Users\jeffe\OneDrive\Documents')

