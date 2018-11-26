BROCCOLI := node_modules/.bin/broccoli

public: $(BROCCOLI) app
	$(BROCCOLI) build public

$(BROCCOLI):
	npm install

.PHONY: clean
clean:
	rm -rf public

.PHONY: clobber
clobber: clean
	rm -rf node_modules
