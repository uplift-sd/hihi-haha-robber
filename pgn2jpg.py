image_path = "static/icon/star.png"
# convert to jpg
from PIL import Image

image = Image.open(image_path)
image = image.convert("RGB")
image.save("static/icon/star.jpg")