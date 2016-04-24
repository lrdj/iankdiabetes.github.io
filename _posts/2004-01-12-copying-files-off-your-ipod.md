---
layout: post
title: "Copying files off your iPod"
date: 2004-01-12 14:32:22
description: "13169579"
thumbnail: defaultThumbnail.png
alt: ""


author: dug
---

<p>Just thought I'd mention that the music files on your iPod are not hidden or copy protected. To download them, you can use the terminal to navigate to the right folder, and then issue a "ditto -rsrc" to copy them to your hard drive.</p>

<p>The music files are stored in a directory format that the internal iPod database uses, as opposed to a human-friendly album/artist hierarchy so really, the only really useful way to use this technique is to download all the files in the "F" directories to a folder on your hard drive ("ditto -rsrc /Volumes/your_ipod_name/iPod_Control/Music/F*/ ~/my_new_ipod_files/") and then drop them on iTunes which will sort and file them nicely.</p>

<p>Of course you could just use Drew Findley's <a href="http://www.drewfindley.com/findleydesigns/ipodaccess/ index.html">iPod Access</a> (though I've not tried it yet so no idea about performance)</p>
