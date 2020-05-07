package main

import (
	"time"

	"go.uber.org/zap"
)

func main() {
	logger, _ := zap.NewProduction()
	defer logger.Sync() // flushes buffer, if any
	sugar := logger.Sugar()

	for {
		sugar.Infow("just a example",
			"author", "tony",
			"today", time.Now().Format("2006-01-02 15:04:05"),
			"yesterday", time.Now().AddDate(0, 0, -1).Format("2006-01-02 15:04:05"),
		)
		time.Sleep(time.Duration(5) * time.Second)
	}
}
