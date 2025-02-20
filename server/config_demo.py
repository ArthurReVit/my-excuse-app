# This is a demo config file.
# It is used to show the user how to create their own config file.
# It is not used in the project.

import os


class Config:
    MONGODB_URI = os.environ.get("MONGODB_URI", "your_default_mongodb_uri_here")
