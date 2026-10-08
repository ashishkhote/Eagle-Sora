from PIL import Image

img = Image.open('public/assets/Eagle Sora_ Smarter Digital Future.png')
print('Size:', img.size)

# The image has 3 sections:
# Top: Hero
# Middle: Quick capabilities
# Bottom: About Us with "Innovation with Purpose" on left and Office reception on right
# Let's crop the bottom right office image!
# Let's find coordinates
w, h = img.size
# Roughly bottom section starts around y = 60% of h, x starts around 50% of w
box = (int(w * 0.48), int(h * 0.72), w, h)
cropped = img.crop(box)
cropped.save('public/assets/about-office-reception.png')
print('Cropped successfully, size:', cropped.size)
