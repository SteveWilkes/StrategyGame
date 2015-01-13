﻿import bs = require("./Scripts/Startup/Bootstrap");
import express = require("express");
import http = require("http");
import Ts = AgileObjects.TypeScript;

class NodeApp {
    private _systemInfo: bs.SystemInfo;

    constructor(
        private _fileManager: Ts.IFileManager,
        serverFactory: (app: express.Express) => http.Server,
        private _bootstrappers: Array<bs.IBootstrapper>) {

        var isReleaseMode = process.env.NODE_ENV === "Release";
        var rootDirectory = this._fileManager.getAppRootDirectory();

        var app = this._createApp(isReleaseMode, rootDirectory);
        var server = serverFactory(app);

        this._systemInfo = new bs.SystemInfo(
            isReleaseMode,
            this._fileManager.joinPaths(rootDirectory, "public"),
            this._fileManager.joinPaths(rootDirectory, "assets"),
            server,
            app);
    }

    private _createApp(isReleaseMode: boolean, rootDirectory: string): express.Express {
        var app = express();

        app.set("port", process.env.PORT || 3000);
        app.set("views", this._fileManager.joinPaths(rootDirectory, "views"));
        app.set("view engine", "jade");
        app.use(express.favicon());
        app.use(express.logger("dev"));
        app.use(express.json());
        app.use(express.urlencoded());
        app.use(express.methodOverride());
        app.use(app.router);

        app.use(express.static(this._fileManager.joinPaths(rootDirectory, "public")));

        if (!isReleaseMode) {
            app.use(express.errorHandler());
        }

        return app;
    }

    public start() {
        for (var i = 0; i < this._bootstrappers.length; i++) {
            this._bootstrappers[i].setup(this._systemInfo);
        }

        this._systemInfo.server.listen(this._systemInfo.port, () => {
            console.log("Server listening on port " + this._systemInfo.port);
        });
    }
}

export = NodeApp;